import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ _algorithm }) => ({
  onClick: () => {
  },
});

export default connect(mapStateToProps)(Component);
