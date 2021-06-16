const express = require('express');
const dbconnect = require('./config/database.config');

/**
 * Connection to database
 * - return connection
*/
dbconnect();

/**
 * Creating express app
 * - creating an object for the express module/library
*/
const app = express();

//parse requests of content-type -
app.use(express.urlencoded({extended : true}))

//parse request of content-type - application/json
app.use(express.json());

//define a simple route
app.get('/',(req, res) => {
    res.send({"message": "Welcome to Fundoo Notes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/user.route.js')(app);

//listen for request
app.listen(6000, ()=> {
    console.log("Server is listening on port 6000");
});