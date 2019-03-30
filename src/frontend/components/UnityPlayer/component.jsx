import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const UnityPlayer = ({ initializeGame, className }) => {
  useEffect(() => {
    initializeGame({ nodeId: 'gameContainer' });
  }, []);

  return (
    <div id="gameContainer" styleName="gameContainer" className={className} />
  );
};

UnityPlayer.propTypes = {
  initializeGame: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default UnityPlayer;
