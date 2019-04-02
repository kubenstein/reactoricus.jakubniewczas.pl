import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ gameStatus }, _props, updateState) => ({
  isFinished: gameStatus === 'finished',
  isFailed: gameStatus === 'failed',
  onClose: () => updateState({ gameStatus: null }),
});

export default connect(mapStateToProps)(Component);
