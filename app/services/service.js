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
        //validate request
        
        //crete for new user notes
        const user = new userModel({
            firstName:userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            password:userData.password
        });
            
        //Save new USer to databse
         user.save()
        .then(userData=>{
            res.send(userData);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || "error occure while creaing the note"
            });
        });
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