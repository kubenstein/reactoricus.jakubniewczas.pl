import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ maps, openedMapId }, _props) => ({
  initializeGame: ({ nodeId }) => {
    const map = maps.filter(m => m.id === openedMapId)[0];
    window.mapCoordinates = map.coordinates; // binding with UnityPlayer
    window.unityGame = window.UnityLoader.instantiate(nodeId, 'game.json');
  },
  unloadGame: () => {
    window.unityGame.Quit();
  },
});

export default connect(mapStateToProps)(Component);
