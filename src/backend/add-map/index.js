import GameMap from 'lib/models/game-map';

import validate from './validate';
import queueMapPreviewGeneration from './queue-map-preview-generation';

export default function addMap({ coordinates, name }) {
  const validationResult = validate({ coordinates, name });

  if (validationResult.isValid()) {
    const createdMap = GameMap.create({ coordinates, name });
    createdMap.then(queueMapPreviewGeneration);
    return createdMap;
  }
  return Promise.reject(validationResult.errors);
}
