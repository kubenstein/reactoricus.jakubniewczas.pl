import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import { stepShape } from 'lib/shapes';

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
  step: stepShape.isRequired,
};

export default Tile;
