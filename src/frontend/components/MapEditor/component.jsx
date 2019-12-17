import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

import './styles.css';

const MapEditor = ({ initStartingPoint, newMapName, onNewMapNameChange }) => {
  useEffect(() => initStartingPoint(), [initStartingPoint]);

  return (
    <>
      <input
        type="text"
        styleName="nameInput"
        placeholder="map name..."
        value={newMapName}
        axlength="60"
        onChange={e => onNewMapNameChange(e.target.value)}
      />
      <span styleName="info">1st click - add a box | 2nd click - add a badge | 3rd click - remove the box</span>
      <div styleName="wrapper">
        <div styleName="grid">
          {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10].map(x => (
            [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10].map(y => (
              <Cell key={`${x}${y}`} x={x} y={y} />
            ))
          ))}
        </div>
      </div>
    </>
  );
};

MapEditor.propTypes = {
  newMapName: PropTypes.string,
  initStartingPoint: PropTypes.func.isRequired,
  onNewMapNameChange: PropTypes.func.isRequired,
};

export default MapEditor;
