// import routes for express
import { Router } from "express";
const router = Router();

// import controller
import { home } from "../controllers/homeController.js";

// set up routes
router.get("/", home);

export default router;
