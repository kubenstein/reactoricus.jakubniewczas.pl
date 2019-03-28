import connect from 'lib/appState/connect';

import { removeStep } from '../algorythm-utils';
import Component from './component';

const mapStateToProps = ({ algorythm }, { step }, updateState) => ({
  onRemove: () => {
    const newAlgorythm = removeStep({ algorythm, step });
    updateState({ algorythm: newAlgorythm });
  },
});

export default connect(mapStateToProps)(Component);
