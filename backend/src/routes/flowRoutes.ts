import express from "express";
import { saveFlow, loadFlow } from "../controllers/flowController";
import { authMiddleware } from "../utils/authMiddleware";

const router = express.Router();

router.post("/save", authMiddleware, saveFlow);
router.get("/load", authMiddleware, loadFlow);

export default router;
