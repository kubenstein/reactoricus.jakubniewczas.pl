import connect from 'lib/appState/connect';

import { execute } from './algorithm-execution-utils';

import Component from './component';

const mapStateToProps = ({ algorithm = [] }, _props, updateState) => ({
  onClick: () => {
    execute(algorithm, (step, next) => {
      updateState({ currentlyPlayedStepId: step.id });
      setTimeout(next, 1000);
    });
  },
});

export default connect(mapStateToProps)(Component);
