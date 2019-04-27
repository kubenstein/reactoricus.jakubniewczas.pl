import axios from 'axios';
import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ maps, mapEditorOpened }, _props, updateState) => ({
  isMapEditorOpened: !!mapEditorOpened,
  mapsApproved: maps.filter(map => map.approved),
  mapsNotYetApproved: maps.filter(map => !map.approved),
  fetchMaps: () => axios.get('/api/maps').then(({ data }) => updateState({ maps: data.maps })),
});

export default connect(mapStateToProps)(Component);
