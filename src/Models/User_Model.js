let UserDao = require('../Daos/User_Dao')
let util = require('../utility/util')

module.exports.getUser = async(data) => {
    try {
        let userData = await UserDao.getUser(data);
        if (userData) {
            return {success : true, status : util.statusCode.SUCCESS, message : 'Data fetched successfully', response : null, respCode : '1'}
        }
        else {
            return {success : false, status : util.statusCode.SOME_ERROR_OCCURRED, message : 'Some error occurred', response : null, respCode : '-1'}
        }
    }
    catch(e) {
        return {success : false, status : util.statusCode.SOME_ERROR_OCCURRED, message : 'Some error occurred', response : null, respCode : '-1'}
    }
}