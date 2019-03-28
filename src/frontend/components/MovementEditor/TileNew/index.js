import connect from 'lib/appState/connect';

import { addStep, buildStep } from '../algorythm-utils';
import Component from './component';


const mapStateToProps = ({ algorythm = [] }, { parent }, updateState) => ({
  addTile: (type) => {
    const step = buildStep({ type, parent });
    const newAlgorythm = addStep({ algorythm, step });
    updateState({ algorythm: newAlgorythm });
  },
});

export default connect(mapStateToProps)(Component);
