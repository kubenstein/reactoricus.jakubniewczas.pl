import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const Tile = ({ isActive, onRemove, step: { type } }) => (
  <div
    className={isActive ? 'active' : ''}
    styleName={`tile-${type}`}
  >
    <FunctionLink styleName="remove" onClick={onRemove}>✖</FunctionLink>
  </div>
);

Tile.propTypes = {
  isActive: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
  step: PropTypes.any.isRequired, // add step shape
};

export default Tile;
