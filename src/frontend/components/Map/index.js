import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, _updateState) => ({
  onClick: () => console.log('onClick'),
});

export default connect(mapStateToProps)(Component);
