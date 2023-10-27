// import routes for express
const express = require("express");
const router = express.Router();

// import controller
const homeController = require("../controllers/homeController");

// set up routes
router.get("/", homeController.home);

module.exports = router;