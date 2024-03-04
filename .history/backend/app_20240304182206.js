const fastify = require("fastify")({ logger: false });
const cors = require('fastify-cors');
const mongoose = require("mongoose");
require("dotenv").config();

const { basicAuth } = require("./authentication/auth")

// Import API routes
const userRoutes = require("./routes/user.routes");

// Connect to the DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log("Error occured while trying to connect to the DB", e));

// Start the server
fastify.register(userRoutes, { prefix: "/api/users" });

// Secure the DB using Basic Auth -- applied to every routes
// fastify.addHook("preHandler", basicAuth); 

// Use the CORS plugin
fastify.register(cors, {
  origin: 'http://localhost:3000', // Specify the origin(s) that are allowed
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
});

// Display routes options
fastify.get("/",function handler (req, reply) {
    options = "Welcome to MyApp API,\n/api/users : access all the users\n/api/users/:id : access a user by id";
    reply.send(options) 
});

const startApi = async() => {
  try {
    await fastify.listen(process.env.PORT || 8080);
    fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
  } catch (error) {}
};

startApi();