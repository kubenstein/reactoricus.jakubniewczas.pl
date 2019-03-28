import connect from 'lib/appState/connect';

import { removeStep, updateLoopIterations } from '../algorythm-utils';
import Component from './component';

const mapStateToProps = ({ algorythm }, { step }, updateState) => ({
  onRemove: () => {
    const newAlgorythm = removeStep({ algorythm, step });
    updateState({ algorythm: newAlgorythm });
  },
  onChange: (input) => {},
});

export default connect(mapStateToProps)(Component);
