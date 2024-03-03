const User = require('../models/user.model');

require('dotenv').config()

async function apiKeyAuth(request, reply) {
	if (['GET', 'HEAD'].includes(request.method)) {
		return;
	}
	const apiKey = request.headers['x-api-key'];
	const knownKey = process.env.APIKEY

	if (!apiKey || apiKey !== knownKey) {
		return reply.code(401).send({ error: "Unauthorized" })
	}
}

async function basicAuth(request, reply) {
	console.log('coucou');
}

module.exports = { apiKeyAuth, basicAuth }