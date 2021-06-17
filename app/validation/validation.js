'use strict';

//importing joi module
const joi = require('joi');

//creting joi validation object
const validateSchema = joi.object({
    //for fisrt name
    firstName: joi.string().min(3).max(30)
               .pattern(new RegExp("^[A-Z]{1}[a-z]{2,}$"))
               .required(),

    //for last name
    lastName: joi.string().min(3).max(30)
               .pattern(new RegExp("^[A-Z]{1}[a-z]{2,}$"))
               .required(),
               
    //for email
    email: joi.string()
           .pattern(new RegExp("^[a-zA-Z]{3}[a-zA-Z0-9\\-\\_\\+]*(\\.)?[a-zA-Z0-9]*(?<!\\.|\\+|\\_|\\-)\\@(?!\\.)[a-z0-9]*(\\.[a-z]{2,3})(\\.[a-z]{2,3})?$"))
           .required(),          

    //for password
    password: joi.string().required(),

});

module.exports = {validateSchema}
