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
      createdAt: '25.03.2019',
      played: 24,
      coordinates: '0,0,0|1,0,1|1,1,0|1,2,0|1,3,0|1,4,0',
    },
    {
      id: '2',
      createdAt: '01.01.2019',
      played: 124,
      coordinates: '0,0,0',
    },
    {
      id: '3',
      createdAt: '01.01.2019',
      played: 124,
      coordinates: '0,0,0|1,0,1|1,1,0|1,2,0|2,2,0',
    },
  ],
};

ReactDOM.render(
  <StateProvider initialState={initialState} onChange={onChange}>
    <Maps />
  </StateProvider>,
  document.getElementById('app'),
);
