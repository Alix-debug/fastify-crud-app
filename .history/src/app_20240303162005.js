const fastify = require('fastify')({logger: true});
const mongoose = require('mongoose');
const { basicAuth } = require('./authentication/auth')
require('dotenv').config();

// Import API routes
const userRoutes = require("./routes/user.routes");

// Connect to the DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // new parser, better compatibility
    useUnifiedTopology: true // replacement of legacy MongoDB driver's connection management system
}).then(() => console.log("Connected to the database")).catch(e => console.log("Error occured while trying to connect to the DB", e));

// Start the server
fastify.register(userRoutes,  { prefix: "/api/users"});

// Display routes options
fastify.get("/",function handler (req, reply) {
    options = "Welcome to MyApp API,\n/api/users : access all the users\n/api/users/:id : access a user by id";
    reply.send(options) 
});

const StartApi = async() => {
    try{
        await fastify.listen(process.env.PORT || 8080);
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch(err) {
        console.error(err);
    }
}

// Add security layer to the API
// fastify.addHook("preHandler", auth);

StartApi();