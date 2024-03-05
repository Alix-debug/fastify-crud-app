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
        console.log("COUCOU getUser");
        const user = await User.findOne({ Email: req.params.email }).select("Password");
        console.log('coucou controllers',user)
		if(!user) {
			reply.status(401).send({ error: "Incorrect password or email"});
		}
        console.log('coucou password',req.params.password)
		// Compare password with hash
		const match = await user.comparePasswords(req.params.password);
		if (!match) {
			return reply.status(401).send({ error: "Incorrect password" });
		}

        const info_user = await User.findById(user._id.toString());
        reply.send(info_user);
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
async function updateUserById(req, reply) {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { 
            new: true // retrieve the updated user
        });
        reply.send(user);
    } catch(err) {
        reply.status(500).send(err);
    }
}

async function updateUser(req, reply) {
    try{

        // check if user exists and select password
        const user = await User.findOne({ Email: req.params.email }).select("Email firstName LastName Password");
		if(!user) {
			reply.status(401).send({ error: "Incorrect Email"});
		}

		// Compare password with hash
		const match = await user.comparePasswords(req.params.password);
		if (!match) {
			return reply.status(401).send({ error: "Incorrect password" });
		}
        
        // return user
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