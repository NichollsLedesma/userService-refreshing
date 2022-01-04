
const mongoose = require('mongoose'),
    { Schema } = mongoose;


const User = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: true,
        required: false,
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', User);