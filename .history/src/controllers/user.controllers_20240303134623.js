const User = require('../models/user.model');

async function getAllUsers(request, reply) {
    try{
        const users = await User.find()
        reply.send(users);
    } catch(err) {
        reply.status(500).send(err);
    }
}

async function getUserById(request, reply) {
    try{
        const user = await User.findById(request.params.id)
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

async function createUser(request, reply) {
    try{
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

async function updateUser(request, reply) {
    try{
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

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