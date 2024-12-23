const { Router } = require("express");
const borrowController = require("../controllers/borrow.js");
const checkAuth = require("../middlewares/checkAuth.js");
const isAdmin = require("../middlewares/isAdmin.js");
const checkUserID = require("../middlewares/checkUserID.js");

const router = new Router();

router.get("/borrow/:isReturn", checkAuth, isAdmin, borrowController.getAll);

router.post("/borrow", checkAuth, isAdmin, borrowController.create); 

router.get("/borrow/:id", checkAuth, borrowController.getOne);

router.patch("/borrow/:id", checkAuth, isAdmin, borrowController.update);

router.get("/borrow/user/:id", checkAuth, checkUserID, borrowController.getBorrow);

router.get("/borrow/book/:id", checkAuth, isAdmin, borrowController.getBook);

module.exports = router;