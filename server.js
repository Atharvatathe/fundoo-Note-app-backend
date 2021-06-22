//importing dotenv file
require('dotenv').config();

const express = require('express');
const dbconnect = require('./config/database.config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./app/swagger/swagger.json');
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

// swagger ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//define a simple route
app.get('/',(req, res) => {
    res.send({"message": "Welcome to Fundoo Notes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/user.route.js')(app);
const PORT = process.env.PORT
//listen for request
app.listen(PORT, ()=> {
    console.log("Server is listening on port",PORT);
});