import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

const StateConsumer = Context.Consumer;

const StateProvider = ({
  children,
  initialState = {},
  onChange = ({ state: _, keyValueObj: __ }) => {},
}) => {
  const [state, setState] = useState(initialState);

  const context = {
    state,
    updateState: (keyValueObj) => {
      setState({ ...state, ...keyValueObj });
      onChange({ state, keyValueObj });
    },
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
  onChange: PropTypes.func,
};

export {
  StateProvider,
  StateConsumer,
};
