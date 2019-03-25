import React from 'react';
import './styles.css';

const MapHeader = () => (
  <div styleName="wrapper">
    <div styleName="box-wrapper">
      <div styleName="box">
        <h1>Lead the Reactoricus</h1>
        <span>
          Help a tiny robot collecting stars! Algorithm it through its robotic journey and share joy together!
        </span>
      </div>
      <div styleName="robot" />
    </div>
  </div>
);

export default MapHeader;
