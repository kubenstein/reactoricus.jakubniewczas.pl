import Sequelize from 'sequelize';
import db from 'lib/db-connection';

const GameMap = db.define('map', {
  id: { type: Sequelize.NUMBER, primaryKey: true },
  coordinates: Sequelize.STRING,
  name: Sequelize.STRING,
  imgUrl: Sequelize.STRING,
  finishedCount: Sequelize.NUMBER,
});

export default GameMap;
