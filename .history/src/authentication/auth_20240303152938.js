async function auth(request, reply) {
    const apiKey = request.header['x-api-key'];
    const key = process.env.API_KEY;

    if(!apiKey || apiKey!== key) {
        return reply.code(401).send({ error: "Unauthorized" });
    }
}

module.exports = auth;