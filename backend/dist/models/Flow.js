"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FlowSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    nodes: { type: Array, required: true },
    edges: { type: Array, required: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Flow", FlowSchema);
