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
  imgUrl: Sequelize.TEXT,
  cloudinaryPublicId: Sequelize.TEXT,
  finishedCount: Sequelize.NUMBER,
  approved: Sequelize.BOOLEAN,
});

export default GameMap;
