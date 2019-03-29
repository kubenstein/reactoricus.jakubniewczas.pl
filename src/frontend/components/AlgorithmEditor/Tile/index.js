import connect from 'lib/appState/connect';

import { removeStep } from '../algorithm-utils';
import Component from './component';

const mapStateToProps = ({ currentlyPlayedStepId, openedMapId, algorithms }, { step }, updateState) => ({
  isActive: currentlyPlayedStepId === step.id,
  onRemove: () => {
    const algorithm = algorithms[openedMapId];
    const newAlgorithm = removeStep({ algorithm, step });

    updateState({ algorithms: {
      ...algorithms,
      [openedMapId]: newAlgorithm,
    } });
  },
});

export default connect(mapStateToProps)(Component);
