const fastify = require('fastify')({logger: true});
const mongoose = require('mongoose');
require('dotenv').config();


// Import API routes
const userRoutes = require("./routes/user.routes");

// Connect to the DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, //for new compatibility
    useUnifiedTopology: true
});

// Start the server
fastify.register(userRoutes,  { prefix: "/api/users"});

const start = async() => {
    try{
        await fastify.listen(process.env.PORT || 8080);
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch(err) {
        console.error(err);
    }
}

start();