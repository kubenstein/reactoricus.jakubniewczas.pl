import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from 'lib/appState';

import Maps from 'components/Maps';

import 'assets';

ReactDOM.render(
  <StateProvider>
    <Maps />
  </StateProvider>,
  document.getElementById('app'),
);
