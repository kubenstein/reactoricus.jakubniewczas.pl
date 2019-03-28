import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const TileNew = ({ addTile }) => {
  const [isOpen, open] = useState(false);

  const onTileClick = (type) => {
    addTile(type);
    open(false);
  };

  return (
    <>
      {isOpen && <FunctionLink styleName="overlay" onClick={() => open(false)} />}
      {isOpen && ReactDOM.createPortal(
        <div styleName="menu">
          <FunctionLink styleName="forward" onClick={() => onTileClick('forward')} />
          <FunctionLink styleName="loop" onClick={() => onTileClick('loop')} />
          <FunctionLink styleName="turnLeft" onClick={() => onTileClick('turnLeft')} />
          <FunctionLink styleName="turnRight" onClick={() => onTileClick('turnRight')} />
        </div>,
        document.getElementById('gameModal'))
      }
      <FunctionLink styleName="tileNew" onClick={() => open(true)} />
    </>
  );
};

TileNew.propTypes = {
  addTile: PropTypes.func.isRequired,
};

export default TileNew;
