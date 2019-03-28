import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import Tile from 'components/AlgorithmEditor/Tile';
import TileNew from 'components/AlgorithmEditor/TileNew';
import Self from 'components/AlgorithmEditor/TileLoop';

import './styles.css';

const TileLoop = ({ onRemove, onChange, step, step: { algorythm, iterations } }) => (
  <div styleName="wrapper">
    <div styleName="tileLoop">
      <FunctionLink styleName="remove" onClick={onRemove}>✖</FunctionLink>
      <input styleName="input" type="number" value={iterations} onChange={e => onChange(parseInt(e.target.value, 0))} />
    </div>
    {algorythm.map(nestedStep => (
      nestedStep.type === 'loop' ? (
        <Self key={nestedStep.id} step={nestedStep} />
      ) : (
        <Tile key={nestedStep.id} step={nestedStep} />
      )),
    )}
    <TileNew parent={step} />
  </div>
);

TileLoop.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.any.isRequired, // add step shape
};

export default TileLoop;
