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
const helperClass = require('../middleware/helper');

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

    /**
     * @description function written to take logged user data from database 
     * @param {*} A valid userData is expected
     */

    loginUser = (loginData,callBack) => {
        const token = helperClass.generateAuthTocken({loginData});
        console.log(token);

        userModel.loginDetails(loginData,(error, data) => {
            if (error) {
                callBack(error, null);
            }
            else if(helperClass.bcryptDataCheck(userData.password, data.password)){
                return callBack("Incorrect password", error);
            }
            return callBack(null, token);
        });
    }
}

module.exports = new UserSrevice();