const userController  = require("../controllers/user.controllers");
const { apiKeyAuth } = require('../authentication/auth')


async function routes(fastify, options) {
    fastify.get("/", userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.post("/", { preHandler: apiKeyAuth }, userController.createUser);
    fastify.put("/:id", { preHandler: apiKeyAuth }, userController.updateUser);
    fastify.delete("/:id", { preHandler: apiKeyAuth }, userController.deleteUser);
}

module.exports = routes;