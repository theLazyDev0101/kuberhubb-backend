
const UserModel = require('../Models/User_Model')
const dbConnection = require('../dbConnection')
const readPool = dbConnection.readPool
const writePool = dbConnection.writePool

module.exports.getUser = async(data) => {
    try {
        query = "SELECT * FROM master_user";
        let [sql] = await readPool.query(query)
        return sql
    }
    catch(e) {
        util.createLog(e)
        return false
    }
}