/**
 * @module       app
 * @file         user.routes.js
 * @description  app module contains api methods
 * @author       Atharva Tathe
 * @since        15/06/2021  
-----------------------------------------------------------------------------------------------*/

//following strict rules in following code(enable strict mode)
"use strict";

//importing note controll module
const controller = require('../controllers/user.controller.js'); 


//Exporting routes
module.exports = (app) => {
   
    // Registration user Post request
    app.post('/register', controller.regiseterUser);

}