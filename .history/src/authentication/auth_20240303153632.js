async function auth(request, reply) {
    // Protect the API but enable access to resources
    if(['GET', 'HEAD'].includes(request.method)) {
        return;  // allow users to read resources without having the key
    }
    const apiKey = request.headers['x-api-key'];
    const key = process.env.API_KEY;

    if(!apiKey || apiKey!== key) {
        return reply.code(401).send({ error: "Unauthorized" });
    }
}

module.exports = auth;