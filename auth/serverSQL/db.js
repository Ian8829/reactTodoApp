import Sequelize from 'sequelize';
const sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': `${__dirname}/data/authApi.sqlite`
});

const db = {};

db.user = sequelize.import(`${__dirname}/models/user.js`);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

