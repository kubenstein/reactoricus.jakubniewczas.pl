import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import './styles.css';

const MapEditorSaveButton = ({ onClick }) => (
  <FunctionLink styleName="saveButton" onClick={onClick}>
    Save!
  </FunctionLink>
);

MapEditorSaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MapEditorSaveButton;
