import axios from 'axios';
import connect from 'lib/appState/connect';
import { sendStep, receiveConfirmation, receiveFail, receiveGameEnds, receiveGameStart } from 'lib/unity-player-binding';

import { execute } from './algorithm-execution-utils';

import Component from './component';

const updateMapStats = mapId => axios.patch(`/api/maps/${mapId}`);

const mapStateToProps = ({ openedMapId, algorithms }, _props, updateState) => ({
  onClick: () => {
    const algorithm = algorithms[openedMapId];
    const startGame = () => {
      updateState({ gameStatus: 'start' });
      execute(algorithm, (step, next) => {
        updateState({ currentlyPlayedStepId: step.id });
        receiveConfirmation(step.type, () => next());
        receiveFail(step.type, () => updateState({ gameStatus: 'failed' }));
        receiveGameEnds(() => {
          updateMapStats(openedMapId);
          updateState({ gameStatus: 'finished' });
        });

        sendStep(step.type);
      });
    };
    receiveGameStart(startGame);
    sendStep('GameStart');
  },
});

export default connect(mapStateToProps)(Component);
