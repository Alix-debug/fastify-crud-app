const fastify = require('fastify')({ logger: false });
const mongoose = require('mongoose');
require('dotenv').config();

const { basicAuth } = require("./authentication/auth");

// Import API routes
const userRoutes = require("./routes/user.routes");

// Connect to the DB
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true, // new parser, better compatibility
        useUnifiedTopology: true // replacement of legacy MongoDB driver's connection management system
    })
    .then(() => console.log("Connected to the database"))
    .catch(e => console.log("Error occured while trying to connect to the DB", e));

// Start the server
fastify.register(userRoutes,  { prefix: "/api/v1/users"});

fastify.addHook("preHandler", basicAuth);

const StartApi = async() => {
    try{
        await fastify.listen(process.env.PORT || 5000);
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch(err) {
        console.error(err);
    }
}

StartApi();