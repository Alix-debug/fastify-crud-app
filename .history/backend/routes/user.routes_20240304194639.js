const userController  = require("../controllers/user.controllers");
const { basicAuth, adminAuth } = require('../authentication/auth')


async function routes(fastify, options) {
    fastify.get("/all",  { preHandler: adminAuth }, userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.get("/:email", { preHandler: basicAuth }, userController.getUserByEmail);
    fastify.post("/", userController.createUser);
    fastify.put("/:id", { preHandler: basicAuth }, userController.updateUser);
    fastify.delete("/:id", { preHandler: basicAuth }, userController.deleteUser);
}

module.exports = routes;