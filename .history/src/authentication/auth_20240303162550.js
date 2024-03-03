require('dotenv').config()

async function apiKeyAuth(request, reply) {
    const apiKey = request.headers['x-api-key'];
    const key = process.env.API_KEY;

    if(!apiKey || apiKey!== key) {
        return reply.code(401).send({ error: "Unauthorized" });
    }
}
async function basicAuth(request, reply) {
    console.log('coucou basicAuth');
}

module.exports = basicAuth