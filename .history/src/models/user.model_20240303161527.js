// Mongo allow to have incode schema to enable data validation
const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    try{
        if(this.isModified('password') || this.isNew) {
            const salt = await bcrypt.genSalt(10); //random string stored in the DB alonside the pwd to secured it even more before hashing
            this.Password = await bcrypt.hash(this.Password, salt);
        }
    } catch (err) {
        next(err); // pass the error to next level of Authentication
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;