import axios from 'axios';
import IGameMap from '../@types/gameMap';

export interface IApiMapsResponse {
  maps: IGameMap[],
}

const apiGetMaps = () : Promise<IApiMapsResponse> => (
  axios.get('/api/maps')
    .then(({ data }: { data: IApiMapsResponse }) => data)
);

export {
  apiGetMaps,
};
