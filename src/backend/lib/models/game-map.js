import Sequelize from 'sequelize';
import db from 'lib/db-connection';

const GameMap = db.define('map', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  coordinates: Sequelize.STRING,
  name: Sequelize.STRING,
  imgUrl: Sequelize.STRING,
  finishedCount: Sequelize.NUMBER,
  approved: Sequelize.BOOLEAN,
});

export default GameMap;
