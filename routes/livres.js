const { Router } = require("express");
const livreController = require("../controllers/livre.js");
const checkAuth = require("../middlewares/checkAuth.js");

const router = new Router();

router.get("/livres", livreController.getAll);

router.post("/livres",checkAuth, livreController.create); 

router.get("/livres/:id", livreController.getOne);

router.patch("/livres/:id", checkAuth, livreController.update); // pas vraiment de sens 

router.delete("/livres/:id", checkAuth, livreController.delete);

module.exports = router;
