/**
 * @module       USerModule
 * @file         user.models.js
 * @description  userSchema holds the database Schema 
 * @author       Atharva Tathe
 * @since        15/06/2021  
-----------------------------------------------------------------------------------------------*/
//Importing mongoose module
const mongoose = require('mongoose');

//Creating User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    lastName: {
        type:String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    email: {
        type:String,
        required: true,
        validate: /^[a-zA-Z]{3}[a-zA-Z0-9\\-\\_\\+]*(\\.)?[a-zA-Z0-9]*(?<!\\.|\\+|\\_|\\-)\\@(?!\\.)[a-z0-9]*(\\.[a-z]{2,3})(\\.[a-z]{2,3})?$/
        
    },
    password: {
        type:String,
        required: true

    }, 
},{
    timestamps: true
});

//Exporting schema as a module
const userInfoModel = mongoose.model('UserInfo', userSchema)

//Create class for performing CRUD operation 

class UserModel {
    /**
     * @description
     * register user in the database
     * @param {} userData 
     * @param {*} callBack 
     */
    
    createUser=(userData,callBack) => {
     //crete for new user notes
      const user = new userInfoModel({
        firstName:userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        password:userData.password
    });
    
         
        //Save new USer to databse
        user.save({}, (error, data) => {
            return((error) ? (callBack(error, null)) : (callBack(null, data)));
        });
    }

}
//exporting the class to use function of this class
module.exports = new UserModel();
