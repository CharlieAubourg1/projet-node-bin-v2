const { Router } = require("express");
const eventController = require("../controllers/event.js");
const checkAuth = require("../middlewares/checkAuth.js");
const isAdmin = require("../middlewares/isAdmin.js");

const router = new Router();

router.get("/event", eventController.getAll);

router.post("/event", checkAuth, isAdmin, eventController.create); 

router.get("/event/:id", eventController.getOne);

router.delete("/event/:id", checkAuth, isAdmin, eventController.delete); //necessaire ? on les stock pas pour avoir un historique si erroné on update nan ?

module.exports = router;
