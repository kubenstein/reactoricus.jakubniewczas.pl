import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ openedMapId, algorithms }, _props, updateState) => ({
  onClick: () => {
    updateState({ algorithms: {
      ...algorithms,
      [openedMapId]: [],
    } });
  },
});

export default connect(mapStateToProps)(Component);
