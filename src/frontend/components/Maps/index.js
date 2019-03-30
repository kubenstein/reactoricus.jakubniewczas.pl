import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ maps }, _props, _updateState) => ({
  maps,
});

export default connect(mapStateToProps)(Component);
