const mongoose = require('mongoose');

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
module.exports = mongoose.model('FundooNote', userSchema)

//Create class for performing CRUD operation 

module.exports = class userModel {
    createUser(userData) {
     //crete for new user notes
      const user ={
        firstName:userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        password:userData.password
    }
    
         
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
  }

}
//exporting the class to use function of this class


