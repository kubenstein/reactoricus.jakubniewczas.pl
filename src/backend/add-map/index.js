import GameMap from 'lib/models/game-map';

import validate from './validate';

export default function addMap({ coordinates, name }) {
  const validationResult = validate({ coordinates, name });

  if (validationResult.isValid()) {
    return GameMap.create({ coordinates, name });
  }
  return Promise.reject(validationResult.errors);
}
