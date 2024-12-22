const { Router } = require("express");
const livreController = require("../controllers/livre.js");
const checkAuth = require("../middlewares/checkAuth.js");
const isAdmin = require("../middlewares/isAdmin.js");

const router = new Router();

router.get("/livres", livreController.getAll);

router.post("/livres", checkAuth, isAdmin, livreController.create); //is admin

router.get("/livres/:id", livreController.getOne);

router.delete("/livres/:id", checkAuth, isAdmin, livreController.delete); //is admin

module.exports = router;
