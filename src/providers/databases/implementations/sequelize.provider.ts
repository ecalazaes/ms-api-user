import { Sequelize } from "sequelize-typescript";
import { UserEntity } from "../../../models/user/user.entity";
require('dotenv').config();

const sequelizeConnection = new Sequelize({
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT as "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    logging: false,
    pool: {
        max: 3,
        min: 1
    },
    models: [UserEntity]
});

sequelizeConnection.sync().catch((e) => {
    return;
})

export { sequelizeConnection }