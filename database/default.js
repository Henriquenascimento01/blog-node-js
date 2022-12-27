dotenv.config();

import dotenv from 'dotenv'
import { Sequelize } from "sequelize";

const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export default connection; 