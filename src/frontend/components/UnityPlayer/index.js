import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  initializeGame: ({ nodeId }) => {
    window.mapCoordinates = '0,0,0|1,0,1|1,1,0'; // binding with UnityPlayer
    updateState({
      unityPlayerInstance: window.UnityLoader.instantiate(nodeId, 'game.json'),
    });
  },
});

export default connect(mapStateToProps)(Component);
