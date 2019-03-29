import connect from 'lib/appState/connect';

import { addStep, buildStep } from '../algorithm-utils';
import Component from './component';


const mapStateToProps = ({ openedMapId, algorithms }, { parent }, updateState) => ({
  addTile: (type) => {
    const algorithm = algorithms[openedMapId] || [];
    const step = buildStep({ type, parent });
    const newAlgorithm = addStep({ algorithm, step });

    updateState({ algorithms: {
      ...algorithms,
      [openedMapId]: newAlgorithm,
    } });
  },
});

export default connect(mapStateToProps)(Component);
