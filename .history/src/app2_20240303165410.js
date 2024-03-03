const fastify = require("fastify")({ logger: false });
const mongoose = require("mongoose");
require("dotenv").config();

const { basicAuth } = require("./authentication/auth")

// Import API routes
const userRoutes = require("./routes/user.routes");

// Connect to the DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log("Error connecting to database", e));

// Start the server
fastify.register(userRoutes, { prefix: "/api/v1/users" });

fastify.addHook("preHandler", basicAuth);

// Display routes options
fastify.get("/",function handler (req, reply) {
    options = "Welcome to MyApp API,\n/api/users : access all the users\n/api/users/:id : access a user by id";
    reply.send(options) 
});

const startApi = async () => {
  try {
    await fastify.listen(process.env.PORT || 8080);
    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`
    );
  } catch (error) { }
};

startApi();