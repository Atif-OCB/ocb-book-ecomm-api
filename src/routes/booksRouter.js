// router for books
import { Router } from "express";
const router = Router();

// import controller
import { getAllBooks, getBookById } from "../controllers/booksController.js";

// set up routes
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
