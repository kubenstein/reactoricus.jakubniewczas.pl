import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const PlayButton = ({ onClick, className }) => (
  <div styleName="wrapper" className={className}>
    <FunctionLink styleName="resetButton" onClick={onClick}>
      reset
    </FunctionLink>
  </div>
);

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default PlayButton;