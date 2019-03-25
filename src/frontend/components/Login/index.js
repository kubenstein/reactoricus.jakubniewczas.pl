import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  onLogin: (userEmail) => {
    updateState({
      userEmail,
    });
  },
});

export default connect(mapStateToProps)(Component);
