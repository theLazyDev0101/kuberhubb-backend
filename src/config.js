var path = require('path')

var BASEPATH = path.resolve(__dirname, '..')
require('dotenv').config({path : BASEPATH + '/src/.env'})
const controllerPath = BASEPATH + '/src/Controllers/';

// DATABASE CONNECTION

const MYSQL_HOST = 'localhost';
const MYSQL_USER = 'root';
const MYSQL_PASSWORD = 'password'
const MYSQL_DB = 'kuberhubb'

const MYSQL_CONFIG = {
    connectionLimit : 25,
    host : MYSQL_HOST,
    user : MYSQL_USER,
    password : MYSQL_PASSWORD,
    database : MYSQL_DB,
    multipleStatements : true
}


module.exports = {
    controllerPath : controllerPath,
    MYSQL_CONFIG   : MYSQL_CONFIG
}