import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import GameResultFanfare from 'components/GameResultFanfare';
import AlgorithmEditor from 'components/AlgorithmEditor';
import UnityPlayer from 'components/UnityPlayer';
import PlayButton from 'components/PlayButton';
import ClearButton from 'components/ClearButton';

import './styles.css';

const GameModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('gameModalOpened');
    return () => {
      document.body.classList.remove('gameModalOpened');
    };
  }, []);

  return (
    <div styleName="gameModal" id="gameModal">
      <FunctionLink styleName="close" onClick={onClose}>✖</FunctionLink>
      <GameResultFanfare />
      <UnityPlayer styleName="unityPlayer" />
      <PlayButton styleName="playButton" />
      <ClearButton styleName="clearButton" />
      <AlgorithmEditor styleName="algorithmEditor" />
    </div>
  );
};

GameModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default GameModal;
