const { Router } = require("express");
const userController = require("../controllers/users.js");
const checkAuth = require("../middlewares/checkAuth.js");
const isAdmin = require("../middlewares/isAdmin.js");
const checkUserID = require("../middlewares/checkUserID.js");

const router = new Router();

router.get("/users", checkAuth, isAdmin, userController.getAll);

router.post("/users", userController.create);

router.get("/users/:id", checkAuth, checkUserID, userController.getOne);

router.patch("/users/:id", checkAuth, checkUserID, userController.update);

router.delete("/users/:id", checkAuth, checkUserID, userController.delete);

router.patch("/users/:id/activate", userController.activateAccount);
module.exports = router;
