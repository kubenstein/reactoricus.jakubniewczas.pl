import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ userEmail }) => ({
  isLoggedIn: !!userEmail,
});

export default connect(mapStateToProps)(Component);
