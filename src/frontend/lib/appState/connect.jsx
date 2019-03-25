import React from 'react';
import { StateConsumer } from '.';

const connect = (mapStateToProps = (() => {})) => Component => props => (
  <StateConsumer>
    {({ state, updateState }) => (
      <Component
        {...props}
        {...mapStateToProps(state, props, updateState)}
      />
    )}
  </StateConsumer>
);

export default connect;
