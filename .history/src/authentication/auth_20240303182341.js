const User = require('../models/user.model');

require('dotenv').config()

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

async function basicAuth(req, reply) {
	const authHeader = req.headers['authorization'];
	if(!authHeader) {
		return reply.status(401).send({error: "No Authorization header"});
	}

	const [ authType, authKey ] = authHeader.split(" ");
	if (authType !== 'Basic') {
		return reply.status(401).send({error: "Require Basic auth (username/pwd)"});
	}

	const [username, password] = Buffer.from(authKey, 'base64').toString('ascii').split(':');

	console.log(username, password);
}

module.exports = { apiKeyAuth, basicAuth }