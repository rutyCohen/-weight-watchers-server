const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    managerID: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'manager' },
    startDate: { type: Date, require: true },
    numberOfParticipants: { type: Number, require: true },
    isActive: { type: Boolean, require: false }
})

module.exports = mongoose.model('group', groupSchema)