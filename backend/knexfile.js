require('dotenv').config()
const path = require('path')
const DBConfig = require('../backend/src/config/database')

module.exports = {
    client: 'mysql2',
    debug: true,
    connection: {
        host: DBConfig.DB_HOST,
        port: DBConfig.DB_PORT,
        user: DBConfig.DB_USER,
        password: DBConfig.DB_PASSWORD,
        database: DBConfig.DB_NAME
    },
    pool: { 
        min: 0, max: 7 
    },
    migrations:{
        tableName: 'migrations',
        directory: path.join(__dirname, 'migrations')
    }
}