import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ newMapName }, _props, updateState) => ({
  newMapName,
  onNewMapNameChange: name => updateState({ newMapName: name }),
  initStartingPoint: () => updateState({
    newMapCoordinates: {
      '0,0': 'start',
    },
  }),
});

export default connect(mapStateToProps)(Component);
