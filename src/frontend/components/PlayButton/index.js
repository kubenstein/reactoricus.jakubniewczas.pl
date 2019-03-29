import connect from 'lib/appState/connect';

import { execute } from './algorithm-execution-utils';

import Component from './component';

const mapStateToProps = ({ openedMapId, algorithms }, _props, updateState) => ({
  onClick: () => {
    const algorithm = algorithms[openedMapId];
    execute(algorithm, (step, next) => {
      updateState({ currentlyPlayedStepId: step.id });
      setTimeout(next, 1000);
    });
  },
});

export default connect(mapStateToProps)(Component);
