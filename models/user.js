const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

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
    },
    created: {
        type: Date,
        default: Date.now
    },
    geometry: GeoSchema
});

const User = mongoose.model('user', UserSchema);

module.exports = User;