/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('maps', [{
      name: 'The Robotic Sword',
      imgUrl: '/images/map_robotic_sword.jpg',
      coordinates: '0,0,0|0,1,0|-1,1,1|1,1,1|0,2,0|0,3,0|0,4,0|0,5,1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'The Robo Bay',
      imgUrl: '/images/map_robo_bay.jpg',
      coordinates: '0,0,0|-1,0,0|-2,0,0|-2,1,1|-1,1,0|-2,-1,0|-2,-2,0|-1,-2,0|0,-2,1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'The Stairs of Steal',
      imgUrl: '/images/map_stairs_of_steal.jpg',
      coordinates: '0,0,0|0,1,0|-1,1,1|-1,2,0|-2,2,1|-2,3,0|-3,3,0|-3,4,1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
}
