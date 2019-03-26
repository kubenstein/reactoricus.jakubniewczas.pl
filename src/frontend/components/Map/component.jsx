import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import './styles.css';

const Map = ({ isOpen, onClick, map: { createdAt, played } }) => (
  <>
    {isOpen && <div>The Game</div>}
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
  map: PropTypes.any, // add map shape
};

export default Map;
