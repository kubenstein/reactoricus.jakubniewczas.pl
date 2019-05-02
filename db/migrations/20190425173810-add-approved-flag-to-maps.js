/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'maps',
      'approved',
      Sequelize.BOOLEAN,
    );
  },
}
