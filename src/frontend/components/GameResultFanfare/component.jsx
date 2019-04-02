import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const GameResultFanfare = ({ isFailed, isFinished, onClose }) => (
  <>
    {isFinished && <FunctionLink onClick={onClose} styleName="finishedFanfare" />}
    {isFailed && <FunctionLink onClick={onClose} styleName="failedFanfare" />}
  </>
);

GameResultFanfare.propTypes = {
  onClose: PropTypes.func.isRequired,
  isFinished: PropTypes.bool,
  isFailed: PropTypes.bool,
};

export default GameResultFanfare;
