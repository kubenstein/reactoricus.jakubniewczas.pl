import React from 'react';
import PropTypes from 'prop-types';

import MapHeader from 'components/MapHeader';
import Map from 'components/Map';
import Footer from 'components/Footer';
import './styles.css';

const Maps = ({ maps }) => {
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
          {maps.map(map => (
            <Map key={map.id} map={map} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

Maps.propTypes = {
  maps: PropTypes.arrayOf(PropTypes.any), // add map shape
};

export default Maps;
