const { Sequelize, DataTypes, Association } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to DataBase');
    })
    .catch(err => {
        console.log("error" + err);
    });
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('./model/users')(sequelize, DataTypes);
db.campaign = require('./model/campaign')(sequelize, DataTypes);
db.currency = require('./model/currency')(sequelize, DataTypes);
db.donation = require('./model/donation')(sequelize, DataTypes);


// Association
db.campaign.hasMany(db.donation, { foreignKey: 'fk_campaign_id', as: "donation" });

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync');
    })

module.exports = db;


