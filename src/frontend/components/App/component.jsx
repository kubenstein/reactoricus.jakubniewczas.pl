import React from 'react';
import PropTypes from 'prop-types';
import Login from 'components/Login';

const App = ({ isLoggedIn }) => (
  isLoggedIn ? <h1>Maps</h1> : <Login />
);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
