const { Router } = require("express");
const livreController = require("../controllers/livre.js");
const checkAuth = require("../middlewares/checkAuth.js");

const router = new Router();

router.get("/livres", livreController.getAll);

router.post("/livres",checkAuth, livreController.create); 

router.get("/livres/:id", livreController.getOne);

router.delete("/livres/:id", checkAuth, livreController.delete);

module.exports = router;
