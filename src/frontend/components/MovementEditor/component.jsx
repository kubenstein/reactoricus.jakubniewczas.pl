import React from 'react';
import PropTypes from 'prop-types';

import TileNew from 'components/MovementEditor/TileNew';
import Tile from 'components/MovementEditor/Tile';

import './styles.css';

const MovementEditor = ({ className, algorythm }) => (
  <div className={className} styleName="wrapper">
    <div styleName="hScrollable">
      {algorythm.map(step => (
        <Tile key={step.id} step={step} />
      ))}
      <TileNew />
    </div>
  </div>
);

MovementEditor.propTypes = {
  className: PropTypes.string,
  algorythm: PropTypes.arrayOf(PropTypes.any), // add step shape
};

export default MovementEditor;
