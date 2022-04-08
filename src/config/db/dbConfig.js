import Sequelize from "sequelize";
import {DB_NAME, DB_USER, DB_HOST, DB_PASSWORD, DB_PORT} from "../utils/secrets.js"

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    quoteIdentifier: false,
    dialectOptions: {
      ssl: {
          require:true,
          rejectUnauthorized: false
      }
    },
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true, 
        underscoredAll: true,
        freezeTableName: true
    },
    pool: {
        aquire: 180000,
    },
});


sequelize.authenticate().then(() => {
    console.info('Connection has been stablished');
}).catch((err) => {
    console.error('Unable to connect to database.');
    console.error(err.message);
});

export default sequelize;