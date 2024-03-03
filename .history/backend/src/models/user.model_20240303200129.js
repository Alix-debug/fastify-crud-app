const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Incode schema for data validation before saving to DB
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
        required: true,
        select: false
    }
});

UserSchema.pre("save", async function(next) {
    try{
        if(this.isModified('password') || this.isNew) {
            const salt = await bcrypt.genSalt(10); // random string stored in the DB alonside the pwd to secured it even more before hashing
            this.Password = await bcrypt.hash(this.Password, salt);
        }
    } catch (err) {
        next(err); // pass the error to next level of Authentication
    }
});

UserSchema.methods.comparePasswords = async function (password) {
    try {
        return await bcrypt.compare(password, this.Password);
    } catch(err) {
        console.error(err);
    }
}
const User = mongoose.model("User", UserSchema);

module.exports = User;