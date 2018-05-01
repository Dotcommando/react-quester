const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & Model
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required field.']
    },
    password: {
        type: String,
        required: [true, 'Password is required field.']
    },
    active: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;