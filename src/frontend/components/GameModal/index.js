import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  onClose: () => updateState({ openedMapId: null }),
});

export default connect(mapStateToProps)(Component);
