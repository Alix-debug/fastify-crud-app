// Mongo allow to have incode schema to enable data validation
const ObjectId = require('bson');
const mongoose = require('mongoose');
const brcypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    Id: {
        type: ObjectId,
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
        required: true
    }
});

UserSchema.pre("save", async function(next) {

})

const User = mongoose.model("User", UserSchema);

module.exports = User;