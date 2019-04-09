/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('maps', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        imgUrl: Sequelize.STRING,
        coordinates: Sequelize.STRING,
        finishedCount: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },

        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },

        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('maps');
  }
}
