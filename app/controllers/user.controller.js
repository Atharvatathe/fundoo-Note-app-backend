//importing service.js file modules
const service = require('../services/service');
//importing validation schema
const {validateSchema} = require('../middleware/validation.js');

class userController{
  /**
     * @description function written to register user
     * @param {*} A valid req is expected
     * @param {*} res
     */
  regiseterUser = (req, res) => {
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
      }

    const user={}

    service.addUser(userData, (error, data) => {
        return error ? res.status(500).send({status:false,
          message: error.message || "Some error occurred while registering user" }) :
          res.status(200).send({message:"User added Sucessfully", data: user.data = data})
      });
  }
   
}

module.exports = new userController();