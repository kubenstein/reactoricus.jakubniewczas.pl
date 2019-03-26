import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ openedMapId }, { map: { id } }, updateState) => ({
  isOpen: openedMapId === id,
  onClick: () => updateState({ openedMapId: id }),
});

export default connect(mapStateToProps)(Component);
