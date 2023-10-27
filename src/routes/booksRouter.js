// router for books
const express = require("express");
const router = express.Router();

// import controller
const booksController = require("../controllers/booksController");

// set up routes
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);


module.exports = router;