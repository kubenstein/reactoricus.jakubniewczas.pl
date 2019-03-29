import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from 'lib/appState';

import Maps from 'components/Maps';

import 'assets';

const initialState = {
  algorithms: {},
};

ReactDOM.render(
  <StateProvider initialState={initialState}>
    <Maps />
  </StateProvider>,
  document.getElementById('app'),
);
