const User = require('../models/user.model');

require('dotenv').config()

async function apiKeyAuth(req, reply) {
	if (['GET', 'HEAD'].includes(request.method)) {
		return;
	}
	const apiKey = req.headers['x-api-key'];
	const knownKey = process.env.APIKEY

	if (!apiKey || apiKey !== knownKey) {
		return reply.code(401).send({ error: "Unauthorized" })
	}
}

async function basicAuth(req, reply) {
	const authHeader = req.headers['authorization'];
	if(!authHeader) {
		return reply.status(401).send({error: "Unauthorized"})
	}
}

module.exports = { apiKeyAuth, basicAuth }