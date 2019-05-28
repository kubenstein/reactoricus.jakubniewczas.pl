import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MapEditor from 'components/MapEditor';
import MapEditorSaveButton from 'components/MapEditorSaveButton';
import FunctionLink from 'components/FunctionLink';

import './styles.css';

const MapEditorModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('mapEditorOpened');
    return () => {
      document.body.classList.remove('mapEditorOpened');
    };
  }, []);

  return (
    <div styleName="mapEditorModal" id="gameModal">
      <MapEditorSaveButton />
      <FunctionLink styleName="close" onClick={onClose}>✖</FunctionLink>
      <MapEditor />
    </div>
  );
};

MapEditorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MapEditorModal;
