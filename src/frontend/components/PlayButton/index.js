import axios from 'axios';
import connect from 'lib/appState/connect';
import populateMapList from 'lib/populate-map-list';
import { sendStep, receiveConfirmation, receiveFail, receiveGameEnds, receiveGameStart } from 'lib/unity-player-binding';

import { execute } from './algorithm-execution-utils';

import Component from './component';

const updateMapStats = ({ mapId, updateState }) => {
  axios.patch(`/api/maps/${mapId}`);
  populateMapList({ updateState });
};

const mapStateToProps = ({ openedMapId, algorithms }, _props, updateState) => ({
  onClick: () => {
    const algorithm = algorithms[openedMapId];
    const startGame = () => {
      updateState({ gameStatus: 'start' });
      execute(algorithm, (step, next) => {
        updateState({ currentlyPlayedStepId: step.id });
        receiveConfirmation(step.type, () => next());
        receiveFail(step.type, () => updateState({ gameStatus: 'failed' }));

        sendStep(step.type);
      });
    };

    receiveGameStart(startGame);
    receiveGameEnds(() => {
      updateMapStats({ mapId: openedMapId, updateState });
      updateState({ gameStatus: 'finished' });
    });

    sendStep('GameStart');
  },
});

export default connect(mapStateToProps)(Component);
