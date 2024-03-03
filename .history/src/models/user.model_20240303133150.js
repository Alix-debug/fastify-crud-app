// Mongo allow to have incode schema to enable data validation
const { Int32 } = require('bson');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Id: {
        type: Int,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;