const { Router } = require("express");
const userController = require("../controllers/users.js");
const checkAuth = require("../middlewares/checkAuth.js");
const isAdmin = require("../middlewares/isAdmin.js");

const router = new Router();

router.get("/users", checkAuth, isAdmin, userController.getAll);

router.post("/users", userController.create);

router.get("/users/:id", checkAuth, userController.getOne);

router.patch("/users/:id", checkAuth, userController.update);

router.delete("/users/:id", checkAuth, userController.delete);

router.patch("/users/:id/activate", userController.activateAccount);
module.exports = router;
