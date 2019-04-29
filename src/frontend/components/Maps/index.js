import connect from 'lib/appState/connect';
import populateMapList from 'lib/populate-map-list';

import Component from './component';

const mapStateToProps = ({ maps, mapEditorOpened }, _props, updateState) => ({
  isMapEditorOpened: !!mapEditorOpened,
  mapsApproved: maps.filter(map => map.approved),
  mapsNotYetApproved: maps.filter(map => !map.approved),
  fetchMaps: () => populateMapList({ updateState }),
});

export default connect(mapStateToProps)(Component);
