import Cookies from 'js-cookie';

import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  onLogin: (userEmail) => {
    Cookies.set('email', userEmail);
    updateState({
      userEmail,
    });
  },
});

export default connect(mapStateToProps)(Component);
