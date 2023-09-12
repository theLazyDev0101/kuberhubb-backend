const express = require('express')
const router  = express.Router()
const UserModel = require('../Models/User_Model')
const UserValidator = require('../Validators/User_Validator')
const validator = require('../utility/validator')
const util = require('../utility/util')


router.post('/user/getUser', async(req, res) => {
    let reqData = validator.requestFilter(req.body)
    if(UserValidator.getUser(reqData)) {
        const userData = await UserModel.getUser(req.body)
        res.json({success : userData.success, status : userData.status, message : userData.message, response : userData.response});
    }
    else {
        res.json({success : false, status : util.statusCode.PARAM_MISSING, message : 'Parameter missing', response : null})
    }
})

module.exports = router;

