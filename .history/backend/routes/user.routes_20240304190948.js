const userController  = require("../controllers/user.controllers");
const { basicAuth } = require('../authentication/auth')


async function routes(fastify, options) {
    fastify.get("/",  { preHandler: basicAuth }, userController.getAllUsers);
    fastify.get("/:id", { preHandler: basicAuth }, userController.getUserById);
    fastify.post("/", userController.createUser);
    fastify.put("/:id", { preHandler: basicAuth }, userController.updateUser);
    fastify.delete("/:id", { preHandler: basicAuth }, userController.deleteUser);
}

module.exports = routes;