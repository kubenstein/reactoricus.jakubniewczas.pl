/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate('maps', {
      name: 'The Stairs of Steel',
      imgUrl: '/images/map_stairs_of_steel.jpg',
    }, {
      id: 3,
    });
  },
}
