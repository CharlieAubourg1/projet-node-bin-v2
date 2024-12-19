const { Router } = require("express");
const livreController = require("../controllers/livre.js");
const checkAuth = require("../middlewares/checkAuth.js");

const router = new Router();

router.get("/users", checkAuth, userController.getAll);

router.post("/users", userController.create);

router.get("/users/:id", checkAuth, userController.getOne);

router.patch("/users/:id", checkAuth, userController.update);

router.delete("/users/:id", checkAuth, userController.delete);

router.patch("/users/:id/activate", userController.activateAccount);
module.exports = router;
