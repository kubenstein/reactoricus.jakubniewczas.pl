import connect from 'lib/appState/connect';

import { removeStep, updateLoopIterations } from '../algorithm-utils';
import Component from './component';

const mapStateToProps = ({ openedMapId, algorithms }, { step }, updateState) => ({
  onRemove: () => {
    const algorithm = algorithms[openedMapId];
    const newAlgorithm = removeStep({ algorithm, step });

    updateState({ algorithms: {
      ...algorithms,
      [openedMapId]: newAlgorithm,
    } });
  },
  onChange: (input) => {
    const iterations = input < 0 ? 0 : input;
    const algorithm = algorithms[openedMapId];
    const newAlgorithm = updateLoopIterations({ algorithm, step, iterations });

    updateState({ algorithms: {
      ...algorithms,
      [openedMapId]: newAlgorithm,
    } });
  },
});

export default connect(mapStateToProps)(Component);
