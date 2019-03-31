import connect from 'lib/appState/connect';
import { sendStep, receiveConfirmation } from 'lib/unity-player-binding';

import { execute } from './algorithm-execution-utils';

import Component from './component';

const mapStateToProps = ({ openedMapId, algorithms }, _props, updateState) => ({
  onClick: () => {
    const algorithm = algorithms[openedMapId];
    receiveConfirmation('GameStart', () => {
      execute(algorithm, (step, next) => {
        receiveConfirmation(step.type, () => setTimeout(next, 0));
        sendStep(step.type);
        updateState({ currentlyPlayedStepId: step.id });
      });
    });

    sendStep('GameStart');
  },
});

export default connect(mapStateToProps)(Component);
