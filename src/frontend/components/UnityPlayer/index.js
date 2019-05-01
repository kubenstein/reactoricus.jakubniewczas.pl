import axios from 'axios';
import connect from 'lib/appState/connect';
import populateMapList from 'lib/populate-map-list';

import { setMapCoordinates, receiveGameReady } from 'lib/unity-player-binding';

import Component from './component';

const generateAndSubmitMapPreview = ({ map, updateState }) => {
  const canvas = document.getElementsByTagName('canvas')[0];
  canvas.toBlob((blob) => {
    const data = new FormData();
    data.append('preview', blob);
    axios.post(`/api/mapsPreview/${map.id}`, data)
      .then(() => populateMapList({ updateState }));
  });
};

const initializeGame = ({ nodeId }) => {
  window.unityGame = window.UnityLoader.instantiate(nodeId, 'game.json');
};

const initializeGameAndTakeAScreenshot = ({ nodeId, map, updateState }) => {
  window.unityGame = window.UnityLoader.instantiate(nodeId, 'game.json', {
    Module: { webglContextAttributes: { preserveDrawingBuffer: true } },
  });

  receiveGameReady(() => setTimeout(() => generateAndSubmitMapPreview({ map, updateState }), 1000));
};


const mapStateToProps = ({ maps, openedMapId }, _props, updateState) => ({
  initializeGame: ({ nodeId }) => {
    const map = maps.filter(m => m.id === openedMapId)[0];

    setMapCoordinates(map.coordinates);
    if (map.cloudinaryPublicId) {
      initializeGame({ nodeId });
    } else {
      initializeGameAndTakeAScreenshot({ nodeId, map, updateState });
    }
  },
  unloadGame: () => {
    window.unityGame.Quit();
  },
});

export default connect(mapStateToProps)(Component);
