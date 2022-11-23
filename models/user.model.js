const mongoose = require("mongoose");

const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2
    },
    phone: {
        type: String,
        minlength: 7,
        maxlength: 10
    },
    email: {
        type: String,
        unique: true,
        validate: [isEmail, 'please insert valid email'],
    },
    height: {
        type: Number,
        minlength: 2,
        maxlength: 3
    },
    weight: {
        type: Number,
        minlength: 2,
        maxlength: 3
    },
    rule: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema);

