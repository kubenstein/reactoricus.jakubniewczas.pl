import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ maps, openedMapId }, _props, updateState) => ({
  initializeGame: ({ nodeId }) => {
    const map = maps.filter(m => m.id === openedMapId)[0];
    window.mapCoordinates = map.coordinates; // binding with UnityPlayer
    updateState({
      unityPlayerInstance: window.UnityLoader.instantiate(nodeId, 'game.json'),
    });
  },
});

export default connect(mapStateToProps)(Component);
