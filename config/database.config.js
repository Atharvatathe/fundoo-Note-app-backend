const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/fundoo-notes'
mongoose.Promise = global.Promise;

/**
 * function to connect to the server:
 *  - If it connect to database successfuly Then prints the success message to the console.
 *  - If it fails to connect, then prints the error message and exits the process.
 */
module.exports = function databaseconnect(){
    mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
}

