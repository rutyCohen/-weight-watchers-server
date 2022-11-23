const mongoose = require("mongoose");
const { isEmail } = require('validator')

const managerSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        require: true
    },
    phone: {
        type: String,
        minlength: 7,
        maxlength: 10,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        validate: [isEmail, 'please insert valid email'],
    }
}, { timestamps: true })

module.exports = mongoose.model('manager', managerSchema);

