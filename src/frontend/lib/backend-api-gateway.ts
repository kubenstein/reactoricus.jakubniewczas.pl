import axios from 'axios';

export interface IApiMapsResponse {
  maps: any[],
}

const apiGetMaps = () : Promise<IApiMapsResponse> => (
  axios.get('/api/maps')
    .then(({ data }: { data: IApiMapsResponse }) => data)
);

export {
  apiGetMaps,
};
