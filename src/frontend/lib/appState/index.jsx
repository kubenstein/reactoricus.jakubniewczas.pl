import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

const StateConsumer = Context.Consumer;

const StateProvider = ({ children, initialState }) => {
  const [state, setState] = useState(initialState);

  const context = {
    state,
    updateState: keyValueObj => setState({ ...state, ...keyValueObj }),
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

StateProvider.propTypes = {
  initialState: PropTypes.shape(),
  children: PropTypes.node,
};

export {
  StateProvider,
  StateConsumer,
};
