/**
 * @module       Fundoo-Notes
 * @file         user.controller.js
 * @description  Usercontroller class holds the Api methods for routing 
 * @author       Atharva Tathe
 * @since        15/06/2021  
-----------------------------------------------------------------------------------------------*/
//importing service.js file modules
const service = require('../services/service');
//importing validation schema
const {validateSchema} = require('../middleware/validation.js');

class UserController{
  /**
     * @description function written to register user
     * @param {*} A valid req is expected
     * @param {*} res
     */
  regiseterUser = (req, res) => {
    
    var userValidation = validateSchema.validate(req.body);
    if(userValidation.error){
    return res
      .status(400)
      .send({ message: userValidation.error.details[0].message });
  }

    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
      }

    service.addUser(userData, (error, data) => {
        return error ? res.status(500).send({status:false,
          message: error.message || "Some error occurred while registering user" }) :
          res.status(200).send({message:"User added Sucessfully", data: data})
      });
  }

  /**
     * @description function written to login user
     * @param {*} A valid req is expected
     * @param {*} res
     */

  loginApi = (req,res)=>{

    const loginData = {
      email: req.body.email,
      password: req.body.password
    }

    service.loginUser(loginData,(error, data) => {
      return error ? res.status(500).send({status:false,
        message: error.message || "Some error occurred while login user" }) :
        res.status(400).send({message:"User login Sucessfully", data: data})
    });
  }
   
}

//Exporting USerController Class
module.exports = new UserController();