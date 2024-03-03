const fastify = require('fastify')({logger: true});
const mongoose = require('mongoose');
require('dotenv').config();


// Import API routes
const routes = require("./routes/user.routes");
// Connect to the DB

// Start the server
fastify.register(routes,  { prefix: "/api/users"});

const start = async() => {
    try{
        await fastify.listen(process.env.PORT || 8080);
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch(err) {
        console.error(err);
    }
}

start();