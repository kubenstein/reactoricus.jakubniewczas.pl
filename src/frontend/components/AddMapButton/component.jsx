import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const AddMapButton = ({ openMapEditor, className }) => (
  <FunctionLink
    styleName="button"
    className={className}
    onClick={openMapEditor}
  >
    Create your own Map
  </FunctionLink>
);

AddMapButton.propTypes = {
  openMapEditor: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AddMapButton;
