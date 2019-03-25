import React from 'react';
import PropTypes from 'prop-types';

import MapHeader from 'components/MapHeader';
import Footer from 'components/Footer';
import FunctionLink from 'components/FunctionLink';
import './styles.css';

const Maps = ({ onClick, maps }) => {
  return (
    <>
      <MapHeader />
      <div styleName="wrapper">
        <p>
          <strong>Lead the Reactoricus </strong>
          is a game where, by using movement blocks, you can guide a tiny robot.
          The goal is to collect all stars on each map.
        </p>
        <span styleName="separator">Choose the map you want to play on!</span>
        <div styleName="maps">
          {maps.map(({ id, createdAt, played }) => (
            <div styleName="map" key={id}>
              <FunctionLink onClick={() => onClick(id)}>
                <img alt="map preview" src="https://via.placeholder.com/430x430" />
              </FunctionLink>
              <div styleName="info">
                <small styleName="created-at">{`added: ${createdAt}`}</small>
                <small>
                  <FunctionLink styleName="heartOn">❤</FunctionLink>
                  {played}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

Maps.propTypes = {
  onClick: PropTypes.func.isRequired,
  maps: PropTypes.arrayOf(PropTypes.any), // add map shape
};

export default Maps;
