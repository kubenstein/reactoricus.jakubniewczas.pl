/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('maps', { approved: true }, {});
  },
}
