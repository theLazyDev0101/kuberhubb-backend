const mysql = require('mysql2')
const config = require('./config')

const pool = mysql.createPool(config.MYSQL_CONFIG)
const readPool = pool.promise()
const writePool = pool.promise()

module.exports = {
    readPool    : readPool,
    writePool   : writePool
}