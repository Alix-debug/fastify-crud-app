require('dotenv').config()

async function apiKeyAuth(req, reply) {
    const apiKey = req.headers['x-api-key'];
    const key = process.env.API_KEY;

    if(!apiKey || apiKey!== key) {
        return reply.code(401).send({ error: "Unauthorized" });
    }
}

async function basicAuth(req, reply) {
    console.log('coucou basicAuth');
    
}

module.exports = {
    apiKeyAuth,
    basicAuth
}