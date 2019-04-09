import Sequelize from 'sequelize';

const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: {
    ssl: true,
  },
});

export default db;
