import React from 'react';
import PropTypes from 'prop-types';
import Login from 'components/Login';
import Maps from 'components/Maps';

const App = ({ isLoggedIn }) => (
  isLoggedIn ? <Maps /> : <Login />
);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
