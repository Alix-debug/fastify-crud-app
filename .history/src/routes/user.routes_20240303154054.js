const userController  = require("../controllers/user.controllers");
const auth = require('../authentication/auth')


async function routes(fastify, options) {
    fastify.get("/", userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.post("/", { preHandler: auth }, userController.createUser);
    fastify.put("/:id", userController.updateUser);
    fastify.delete("/:id", userController.deleteUser);
}

module.exports = routes;