import { Router } from "express";
import { buscarTodos } from "../controllers/BoardController.js";

const router = Router();

router.get("/", buscarTodos);

export default router;