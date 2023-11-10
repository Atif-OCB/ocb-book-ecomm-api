// router for books
import { Router } from "express";
const router = Router();

// import controller
import {
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/booksController.js";

// set up routes
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBookById);

export default router;
