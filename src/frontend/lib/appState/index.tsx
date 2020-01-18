import React, { useState } from 'react';
import EventEmitter from 'wolfy87-eventemitter';
import { IStateKeyValue } from './types';

const stateUpdater = new EventEmitter();
const Context = React.createContext({});
const StateConsumer = Context.Consumer;

interface IStateProviderProps {
  children: React.ReactNode,
  initialState: IStateKeyValue,
  onChange(state: IStateKeyValue, keyValueObj: IStateKeyValue): void
}

const StateProvider = ({ children, initialState = {}, onChange = () => {} } : IStateProviderProps) => {
  const [state, setState] = useState(initialState);

  stateUpdater.once('change', (keyValueObj: IStateKeyValue) => {
    setState({ ...state, ...keyValueObj });
    onChange(state, keyValueObj);
  });

  const context = {
    state,
    updateState: (keyValueObj: IStateKeyValue) => {
      stateUpdater.emitEvent('change', [keyValueObj]);
    },
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

export {
  StateProvider,
  StateConsumer,
};
