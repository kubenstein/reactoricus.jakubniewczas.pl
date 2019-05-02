/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'maps',
      'cloudinaryPublicId',
      Sequelize.TEXT,
    );
  },
}
