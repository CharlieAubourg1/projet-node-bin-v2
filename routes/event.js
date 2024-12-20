const { Router } = require("express");
const eventController = require("../controllers/event.js");
const checkAuth = require("../middlewares/checkAuth.js");

const router = new Router();

router.get("/event", eventController.getAll);

router.post("/event", checkAuth, eventController.create); 
// isAdmin

router.get("/event/:id", eventController.getOne);

router.delete("/event/:id", checkAuth, eventController.delete);
// isAdmin

module.exports = router;
