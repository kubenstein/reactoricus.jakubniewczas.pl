import axios from 'axios';

const populateMapList = ({ updateState }) => {
  axios.get('/api/maps').then(({ data }) => updateState({ maps: data.maps }));
};

export default populateMapList;
