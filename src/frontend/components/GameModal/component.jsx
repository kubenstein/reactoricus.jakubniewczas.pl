import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const GameModal = ({ onClose, map: { id } }) => {
  useEffect(() => {
    document.body.classList.add('gameModalOpened');
    return () => {
      document.body.classList.remove('gameModalOpened');
    };
  });

  return (
    <div styleName="gameModal">
      <FunctionLink styleName="close" onClick={onClose}>✖</FunctionLink>
      <div styleName="unityPlayer">
        render unity webgl here, map id:
        {id}
      </div>
      <div styleName="movementEditor">movement Editor</div>
    </div>
  );
};

GameModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  map: PropTypes.any, // add map shape
};

export default GameModal;
