import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  openMapEditor: () => updateState({ mapEditorOpened: true }),
});

export default connect(mapStateToProps)(Component);
