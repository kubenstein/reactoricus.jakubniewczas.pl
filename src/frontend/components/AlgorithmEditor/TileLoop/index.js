import connect from 'lib/appState/connect';

import { removeStep, updateLoopIterations } from '../algorithm-utils';
import Component from './component';

const mapStateToProps = ({ algorithm }, { step }, updateState) => ({
  onRemove: () => {
    const newAlgorithm = removeStep({ algorithm, step });
    updateState({ algorithm: newAlgorithm });
  },
  onChange: (input) => {
    const iterations = input < 0 ? 0 : input;
    const newAlgorithm = updateLoopIterations({ algorithm, step, iterations });
    updateState({ algorithm: newAlgorithm });
  },
});

export default connect(mapStateToProps)(Component);
