import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const ClearButton = ({ onClick, className }) => (
  <div styleName="wrapper" className={className}>
    <FunctionLink styleName="clearButton" onClick={onClick}>
      Clear Algorythm
    </FunctionLink>
  </div>
);

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ClearButton;
