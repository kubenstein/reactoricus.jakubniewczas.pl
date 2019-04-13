/* eslint-disable */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('maps', [
      //
      // by Staś Małolepszy
      // https://twitter.com/stas/status/1117002809000509440
      {
        name: 'The Closed Circuit',
        imgUrl: '/images/map_closed_circuit.jpg',
        coordinates: '-1,2,1|0,2,0|1,2,1|2,2,0|-1,1,0|1,1,0|2,1,0|-1,0,0|0,0,0|2,0,0|-1,-1,0|0,-1,1|1,-1,0|2,-1,1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
}
