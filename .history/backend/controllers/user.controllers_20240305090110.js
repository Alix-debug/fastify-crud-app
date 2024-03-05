const User = require('../models/user.model');

//Route to retrieve all users from db
async function getAllUsers(req, reply) {
    try{
        const users = await User.find()
        reply.send(users);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to retrieve a specific user by id
async function getUserById(req, reply) {
    try{
        const user = await User.findById(req.params.id);
        reply.send(user);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to retrieve a specific user by email
async function getUser(req, reply) {
    try{
        console.log(req.body)
        const user = await User.findOne({ Email: req.params.Email }).select("Password");
        console.log('coucou controllers',user)
		if(!user) {
			reply.status(401).send({ error: "Incorrect password or email"});
		}
        console.log('coucou password',req.params.Password)
		// Compare password with hash
		const match = await user.comparePasswords(req.params.Password);
		if (!match) {
			return reply.status(401).send({ error: "Incorrect password" });
		}
        reply.send(user);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to add a user inside db (CRUD Create)
async function createUser(req, reply) {
    try{
        const user = new User(req.body);
        const result = await user.save();
        reply.send(result);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to update a user inside db (CRUD Update)
async function updateUser(req, reply) {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { 
            new: true // retrieve the updated user
        });
        reply.send(user);
    } catch(err) {
        reply.status(500).send(err);
    }
}

//Route to delete a user inside db (CRUD Delete)
async function deleteUser(req, reply) {
    try{
        await User.findByIdAndDelete(req.params.id);
        reply.send(204).send("");
    } catch(err) {
        reply.status(500).send(err);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUser,
    createUser,
    updateUser,
    deleteUser
};