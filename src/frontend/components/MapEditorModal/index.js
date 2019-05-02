import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  onClose: () => updateState({ mapEditorOpened: false }),
});

export default connect(mapStateToProps)(Component);
