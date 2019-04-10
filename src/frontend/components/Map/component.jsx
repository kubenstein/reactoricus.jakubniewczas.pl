import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import GameModal from 'components/GameModal';

import { mapShape } from 'lib/shapes';

import './styles.css';

const Map = ({ isOpen, onClick, map: { name, imgUrl, finishedCount } }) => (
  <>
    {isOpen && <GameModal />}
    <div styleName="map">
      <FunctionLink onClick={onClick}>
        <img alt="map preview" src={imgUrl} />
      </FunctionLink>
      <div styleName="info">
        <small styleName="name">
          map name:
          <span>
            {` ${name}`}
          </span>
        </small>
        <small styleName="counter" title="Count of Finished Runs">
          {`✔ ${finishedCount}`}
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
