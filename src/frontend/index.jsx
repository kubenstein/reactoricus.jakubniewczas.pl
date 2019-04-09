import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import localStorage from 'store2';
import { StateProvider } from 'lib/appState';

import Maps from 'components/Maps';

import 'assets';

const onChange = ({ keyValueObj: { algorithms } }) => {
  if (algorithms) localStorage.set('algorithms', algorithms);
};

const initialState = {
  algorithms: localStorage.get('algorithms') || {},
  maps: [
    {
      id: '1',
      name: 'The Robotic Sword',
      imgUrl: '/images/map_robotic_sword.jpg',
      coordinates: '0,0,0|0,1,0|-1,1,1|1,1,1|0,2,0|0,3,0|0,4,0|0,5,1',
    },
    {
      id: '2',
      name: 'The Robo Bay',
      imgUrl: '/images/map_robo_bay.jpg',
      coordinates: '0,0,0|-1,0,0|-2,0,0|-2,1,1|-1,1,0|-2,-1,0|-2,-2,0|-1,-2,0|0,-2,1',
    },
    {
      id: '3',
      name: 'The Stairs of Steal',
      imgUrl: '/images/map_stairs_of_steal.jpg',
      coordinates: '0,0,0|0,1,0|-1,1,1|-1,2,0|-2,2,1|-2,3,0|-3,3,0|-3,4,1',
    },
  ],
};

ReactDOM.render(
  <StateProvider initialState={initialState} onChange={onChange}>
    <Maps />
  </StateProvider>,
  document.getElementById('app'),
);
