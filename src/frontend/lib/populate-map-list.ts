import { IUpdateState } from './appState/types';
import { apiGetMaps } from './backend-api-gateway';

const populateMapList = ({ updateState }: { updateState: IUpdateState }) : void => {
  apiGetMaps()
    .then(({ maps }) => updateState({ maps }));
};

export default populateMapList;
