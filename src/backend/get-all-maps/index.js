import GameMap from 'lib/models/game-map';

export default function getAllMaps() {
  return GameMap.findAll({ order: [
    ['id', 'DESC'],
  ] });
}
