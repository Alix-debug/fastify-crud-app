const fastify = require('fastify')({logger: true});
const mongoose = require('mongoose');
require('dotenv').config();


// Import API routes
const routes = require("./routes/user.routes");
// Connect to the DB

// Start the server