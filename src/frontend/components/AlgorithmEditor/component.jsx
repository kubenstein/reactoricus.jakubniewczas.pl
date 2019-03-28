import React from 'react';
import PropTypes from 'prop-types';

import TileLoop from 'components/AlgorithmEditor/TileLoop';
import TileNew from 'components/AlgorithmEditor/TileNew';
import Tile from 'components/AlgorithmEditor/Tile';

import './styles.css';

const AlgorithmEditor = ({ className, algorythm }) => (
  <div className={className} styleName="wrapper">
    <div styleName="hScrollable">
      {algorythm.map(step => (
        step.type === 'loop' ? (
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
  algorythm: PropTypes.arrayOf(PropTypes.any), // add step shape
};

export default AlgorithmEditor;
