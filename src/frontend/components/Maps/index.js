import axios from 'axios';
import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ maps }, _props, updateState) => ({
  maps,
  fetchMaps: () => axios.get('/api/maps').then(({ data }) => updateState({ maps: data.maps })),
});

export default connect(mapStateToProps)(Component);
