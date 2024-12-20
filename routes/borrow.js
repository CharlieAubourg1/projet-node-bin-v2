const { Router } = require("express");
const borrowController = require("../controllers/borrow.js");
const checkAuth = require("../middlewares/checkAuth.js");

const router = new Router();

router.get("/borrow", borrowController.getAll);

router.post("/borrow",checkAuth, borrowController.create); 

router.get("/borrow/:id", borrowController.getOne);

router.patch("/borrow/:id", checkAuth, borrowController.update);

module.exports = router;
