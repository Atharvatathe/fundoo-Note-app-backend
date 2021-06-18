/**
 * @module       USerService
 * @file         service.js
 * @description  USerService class holds the callback method for controller 
 * @author       Atharva Tathe
 * @since        15/06/2021  
-----------------------------------------------------------------------------------------------*/
//following strict rules in following code(enable strict mode)
"use strict";
//importing model modules 
const userModel = require('../models/user.model');

class UserSrevice{
    /**
     * @description function written to create user data into database 
     * @param {*} A valid userData is expected
     */
    addUser = (userData,callBack) => {
        userModel.createUser(userData, (error, data) => {
            return ((error) ? callBack(error,null) : callBack(null, data));
        });
    }
}

module.exports = new UserSrevice();