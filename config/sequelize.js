import { Sequelize } from 'sequelize';
import config from './config'; // Adjust this based on your setup

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: 'mysql',
});

export default sequelize;
