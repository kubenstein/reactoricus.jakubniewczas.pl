import GameMap from 'lib/models/game-map';

export default function updateFinishedCounter(mapId) {
  return GameMap.increment('finishedCount', { by: 1, where: { id: mapId } });
}
