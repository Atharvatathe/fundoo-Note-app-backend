"use strict";
const { response } = require('express');
//importing model modules 
const userModel = require('../models/user.model');

class userSrevice{
    /**
     * @description function written to create user data into database 
     * @param {*} A valid userData is expected
     */
    addUser = (userData,callBack) => {
        userModel.createUser(userData, (error, data) => {
            return ((error) ? callBack(error.null) : callBack(null, data));
        });
    }
}

module.exports = new userSrevice();