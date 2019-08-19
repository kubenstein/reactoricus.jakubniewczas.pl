import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const GameControls = ({ onPlayClick, onResetClick, className }) => (
  <div styleName="wrapper" className={className}>
    <FunctionLink styleName="playButton" onClick={onPlayClick}>
      Play Game!
    </FunctionLink>
    <FunctionLink styleName="resetButton" onClick={onResetClick}>
      Reset
    </FunctionLink>
  </div>
);

GameControls.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default GameControls;
