import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import Tile from 'components/MovementEditor/Tile';
import TileNew from 'components/MovementEditor/TileNew';

import './styles.css';

const TileLoop = ({ onRemove, onChange, step, step: { algorythm, iterations } }) => (
  <div styleName="wrapper">
    <div styleName="tileLoop">
      <FunctionLink styleName="remove" onClick={onRemove}>✖</FunctionLink>
      <input styleName="input" type="number" value={iterations} onChange={e => onChange(parseInt(e.target.value, 0))} />
    </div>
    <TileNew parent={step} />
  </div>
);

TileLoop.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.any.isRequired, // add step shape
};

export default TileLoop;
