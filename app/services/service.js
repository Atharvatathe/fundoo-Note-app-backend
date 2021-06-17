"use strict";
const { response } = require('express');
//importing model modules 
const userModel = require('../models/user.model');

class userSrevice{
    /**
     * @description function written to create user data into database 
     * @param {*} A valid userData is expected
     */
    addUser(userData) {
        const user = userModel.createUser(userData);
            return user;
    };
    
    /**
     * @description function written to get all user data from database
     */
    findAll = () => {
        try{
            const allNotes = userModel.find();
            return allNotes;
        } catch(error){
            console.log(`could not fetch Notes ${error}`)
        }
    }
}

module.exports = new userSrevice();