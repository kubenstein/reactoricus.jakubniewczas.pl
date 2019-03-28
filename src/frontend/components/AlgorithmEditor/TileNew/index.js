import connect from 'lib/appState/connect';

import { addStep, buildStep } from '../algorithm-utils';
import Component from './component';


const mapStateToProps = ({ algorithm = [] }, { parent }, updateState) => ({
  addTile: (type) => {
    const step = buildStep({ type, parent });
    const newAlgorithm = addStep({ algorithm, step });
    updateState({ algorithm: newAlgorithm });
  },
});

export default connect(mapStateToProps)(Component);
