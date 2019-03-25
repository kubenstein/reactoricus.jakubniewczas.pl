import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from 'lib/appState';

import App from 'components/App';

import 'assets';

ReactDOM.render(
  <StateProvider initialState={{}}>
    <App />
  </StateProvider>,
  document.getElementById('app'),
);
