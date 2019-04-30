/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('maps','imgUrl', {
      type: Sequelize.TEXT,
    });
  },
}
