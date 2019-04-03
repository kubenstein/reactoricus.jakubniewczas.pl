/* eslint-disable no-var, vars-on-top */
const pathUtils = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV;
const srcDir = __dirname;
const rootDir = `${srcDir}/../`;
const frontendDir = `${srcDir}/frontend/`;

var path;
if (env === 'production') {
  path = `${rootDir}/frontend`;
  fs.removeSync(path);
}

const cssModulesIdentifier = '[local]___[hash:10]';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: `${frontendDir}/index.jsx`,

  output: {
    path,
    publicPath: '/',
    filename: 'web.bundle.js',
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                ['babel-plugin-react-css-modules', {
                  generateScopedName: cssModulesIdentifier,
                }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: `file-loader?name=[path][name].[ext]&context=${frontendDir}`,
          },
        ],
      },
      {
        test: /\.png$|\.jpe?g$|\.gif$|\.svg$|\.woff$|\.ttf$/,
        use: [
          {
            loader: `file-loader?name=images/[name].[ext]&context=${frontendDir}`,
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: cssModulesIdentifier,
              importLoaders: 2,
            },
          },
          'sass-loader',
          'resolve-url-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      frontendDir,
      srcDir,
      rootDir,
      'node_modules',
    ],
  },

  devServer: {
    disableHostCheck: true,
    contentBase: [pathUtils.join(__dirname, '..', 'unitybuild')],
    proxy: {
    },
  },

  stats: { children: false },
  optimization: {
    minimizer: (env === 'production') ? [
      new OptimizeCSSAssetsPlugin({}),
    ] : [],
  },
  plugins: (env === 'production') ? [
    new MiniCssExtractPlugin({ filename: 'web.bundle.css' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ] : [
    new MiniCssExtractPlugin({ filename: 'web.bundle.css' }),
  ],
};
