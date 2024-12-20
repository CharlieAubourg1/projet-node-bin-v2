const { Router } = require("express");
const livreController = require("../controllers/livre.js");
const checkAuth = require("../middlewares/checkAuth.js");

const router = new Router();

router.get("/livres", livreController.getAll);

router.post("/livres", livreController.create); //is admin

router.get("/livres/:id", livreController.getOne);

router.delete("/livres/:id", livreController.delete); //is admin

module.exports = router;
