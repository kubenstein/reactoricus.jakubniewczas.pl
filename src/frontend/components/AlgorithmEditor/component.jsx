import React from 'react';
import PropTypes from 'prop-types';

import TileLoop from 'components/AlgorithmEditor/TileLoop';
import TileNew from 'components/AlgorithmEditor/TileNew';
import Tile from 'components/AlgorithmEditor/Tile';

import { stepShape } from 'lib/shapes';

import './styles.css';

const AlgorithmEditor = ({ className, algorithm }) => (
  <div className={className} styleName="wrapper">
    <div styleName="hScrollable">
      {algorithm.map(step => (
        step.type === 'Loop' ? (
          <TileLoop key={step.id} step={step} />
        ) : (
          <Tile key={step.id} step={step} />
        )))}
      <TileNew />
    </div>
  </div>
);

AlgorithmEditor.propTypes = {
  className: PropTypes.string,
  algorithm: PropTypes.arrayOf(stepShape),
};

export default AlgorithmEditor;
