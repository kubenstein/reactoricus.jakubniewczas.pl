import connect from 'lib/appState/connect';

import { removeStep } from '../algorithm-utils';
import Component from './component';

const mapStateToProps = ({ currentlyPlayedStepId, algorithm }, { step }, updateState) => ({
  isActive: currentlyPlayedStepId === step.id,
  onRemove: () => {
    const newAlgorithm = removeStep({ algorithm, step });
    updateState({ algorithm: newAlgorithm });
  },
});

export default connect(mapStateToProps)(Component);
