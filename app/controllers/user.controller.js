//importing service.js file modules
const service = require('../services/service');
//importing validation schema
const {validateSchema} = require('../validation/validation.js');

class userController{
  /**
     * @description function written to register user
     * @param {*} A valid req is expected
     * @param {*} res
     */
  regiseterUser = (req, res) => {
    try{
     
       const userData = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
          }

        const createUser = service.addUser(userData);
        res.json(createUser);
      }catch(error){
        res.status(500).json({error:error});
      
      }
    }
    /**
     * @description function written to get user data
     * @param {*} A valid req is expected
     * @param {*} res
    */
    getUserInfo = (req, res) => {
    try {
      const userInfo = service.findAll();
      if(!userInfo){
         res.status(404).json("There are no User info yet!")
      }
      res.json(userInfo);
    } catch (error) {
       res.status(500).json({error: error})
    }
  }  


}

module.exports = new userController();