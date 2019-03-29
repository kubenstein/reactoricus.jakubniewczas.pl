import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ openedMapId, algorithms }) => ({
  algorithm: algorithms[openedMapId] || [],
});

export default connect(mapStateToProps)(Component);
