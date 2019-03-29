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
};

ReactDOM.render(
  <StateProvider initialState={initialState} onChange={onChange}>
    <Maps />
  </StateProvider>,
  document.getElementById('app'),
);
