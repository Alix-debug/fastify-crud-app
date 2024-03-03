const userController  = require("../controllers/user.controllers");
const { basicAuth } = require('../authentication/auth')


async function routes(fastify, options) {
    fastify.get("/", userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.post("/", userController.createUser);
    fastify.put("/:id", { preHandler: basicAuth }, userController.updateUser);
    fastify.delete("/:id", { preHandler: basicAuth }, userController.deleteUser);
}

module.exports = routes;