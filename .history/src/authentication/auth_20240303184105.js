const User = require('../models/user.model');

require('dotenv').config()

// Authorization (unsufficient)
async function apiKeyAuth(req, reply) {
	if (['GET', 'HEAD'].includes(request.method)) {
		return;
	}
	const apiKey = req.headers['x-api-key'];
	const knownKey = process.env.APIKEY

	if (!apiKey || apiKey !== knownKey) {
		return reply.code(401).send({ error: "Unauthorized" });
	}
}

// Authentication
async function basicAuth(req, reply) {
	const authHeader = req.headers['authorization'];

	if(!authHeader) {
		return reply.status(401).send({error: "No Authorization header"});
	}

	const [ authType, authKey ] = authHeader.split(" ");

	if (authType !== 'Basic') {
		return reply.status(401).send({error: "Require Basic auth (username/pwd)"});
	}

	const [email, password] = Buffer.from(authKey, 'base64').toString('ascii').split(':');
	console.log(email, password);
	try{
		// find correct user in the database using unique email
		const user = await User.findOne({ email });
		if(!user) {
			reply.status(401).send({ error: "Incorrect password or email"});
		}

	} catch (err) {
		return reply.status(500).send({error: 'An error occured during authentiation'});
	}
	// Compare password with hash
}

module.exports = { apiKeyAuth, basicAuth }