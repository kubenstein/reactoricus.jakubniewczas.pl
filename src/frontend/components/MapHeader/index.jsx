import React from 'react';
import GHRibbon from './GHRibbon';

import './styles.css';

const MapHeader = () => (
  <div styleName="wrapper">
    <GHRibbon />
    <div styleName="box-wrapper">
      <div styleName="box">
        <h1>Lead the Reactoricus</h1>
        <span>
          Help a tiny robot collecting badges! Algorithm him through his robotic journey and share joy together!
        </span>
      </div>
      <div styleName="robot" />
    </div>
  </div>
);

export default MapHeader;
