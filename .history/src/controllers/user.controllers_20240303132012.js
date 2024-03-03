// const User = require('../models/user.model');


async function getAllUsers(request, reply) {
    try{
        reply.send("Not implemented yet");
    } catch(err) {
        reply.status(500).send(err);
    }
}

async function getUserById(request, reply) {
    try{
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