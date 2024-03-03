const User = require('../models/user.model');

//Route to retrieve all users from db
async function getAllUsers(request, reply) {
    try{
        const users = await User.find()
        reply.send(users);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to retrieve a specific user by id
async function getUserById(request, reply) {
    try{
        const user = await User.findById(request.params.id);
        reply.send(user);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to add a user inside db (CRUD Create)
async function createUser(request, reply) {
    try{
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to update a user inside db (CRUD Update)
async function updateUser(request, reply) {
    try{
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to delete a user inside db (CRUD Delete)
async function deleteUser(request, reply) {
    try{
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};