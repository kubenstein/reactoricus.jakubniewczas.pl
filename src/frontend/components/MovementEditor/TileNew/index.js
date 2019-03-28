import connect from 'lib/appState/connect';

import { addStep, buildStep } from '../algorythm-utils';
import Component from './component';


const mapStateToProps = ({ algorythm = [] }, _props, updateState) => ({
  addTile: (type) => {
    const step = buildStep({ type });
    const newAlgorythm = addStep({ algorythm, step });
    updateState({ algorythm: newAlgorythm });
  },
});

export default connect(mapStateToProps)(Component);
