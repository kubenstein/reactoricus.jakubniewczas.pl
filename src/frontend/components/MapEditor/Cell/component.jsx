import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const Cell = ({ type, onClick }) => (
  <FunctionLink styleName={`cell-${type}`} onClick={onClick} />
);

Cell.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cell;
