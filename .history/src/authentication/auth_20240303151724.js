async function auth(request, reply) {
    const apiKey = request.header['x-api-key'];
    const key = process.env.API_KEY
}