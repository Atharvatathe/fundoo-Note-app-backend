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
module.exports = mongoose.model('FundooNote', userSchema);

