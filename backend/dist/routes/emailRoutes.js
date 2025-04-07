"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailController_1 = require("../controllers/emailController");
const validateRequest_1 = __importDefault(require("../utils/validateRequest"));
const authMiddleware_1 = require("../utils/authMiddleware");
const router = express_1.default.Router();
router.post('/schedule', authMiddleware_1.authMiddleware, validateRequest_1.default, emailController_1.scheduleEmail);
// router.post('/schedule', validateRequest, scheduleEmail);
router.get('/flows', authMiddleware_1.authMiddleware, emailController_1.getSavedFlows);
exports.default = router;
