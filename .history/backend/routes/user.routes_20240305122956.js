const userController  = require("../controllers/user.controllers");
const { basicAuth, adminAuth } = require('../authentication/auth')


async function routes(fastify, options) {
    fastify.get("/all",  { preHandler: adminAuth }, userController.getAllUsers);
    fastify.get("/:email/:password", { preHandler: basicAuth }, userController.getUser);
    fastify.post("/", userController.createUser);
    fastify.put("/:email/:password", { preHandler: basicAuth }, userController.updateUser);
    fastify.delete("/:email/:password", { preHandler: basicAuth }, userController.deleteUser);
}

module.exports = routes;