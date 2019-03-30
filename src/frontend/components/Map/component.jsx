import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import GameModal from 'components/GameModal';

import { mapShape } from 'lib/shapes';

import './styles.css';

const Map = ({ isOpen, onClick, map, map: { createdAt, played } }) => (
  <>
    {isOpen && <GameModal map={map} />}
    <div styleName="map">
      <FunctionLink onClick={onClick}>
        <img alt="map preview" src="https://via.placeholder.com/430x430" />
      </FunctionLink>
      <div styleName="info">
        <small styleName="createdAt">{`added: ${createdAt}`}</small>
        <small>
          <span styleName="heartOn">❤</span>
          {played}
        </small>
      </div>
    </div>
  </>
);

Map.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  map: mapShape.isRequired,
};

export default Map;
