import connect from 'lib/appState/connect';

import { removeStep, updateLoopIterations } from '../algorythm-utils';
import Component from './component';

const mapStateToProps = ({ algorythm }, { step }, updateState) => ({
  onRemove: () => {
    const newAlgorythm = removeStep({ algorythm, step });
    updateState({ algorythm: newAlgorythm });
  },
  onChange: (input) => {
    const iterations = input < 0 ? 0 : input;
    const newAlgorythm = updateLoopIterations({ algorythm, step, iterations });
    updateState({ algorythm: newAlgorythm });
  },
});

export default connect(mapStateToProps)(Component);
