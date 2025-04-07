"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flowController_1 = require("../controllers/flowController");
const authMiddleware_1 = require("../utils/authMiddleware");
const router = express_1.default.Router();
router.post("/save", authMiddleware_1.authMiddleware, flowController_1.saveFlow);
router.get("/load", authMiddleware_1.authMiddleware, flowController_1.loadFlow);
exports.default = router;
