"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFlow = exports.saveFlow = void 0;
const Flow_1 = __importDefault(require("../models/Flow"));
const saveFlow = async (req, res) => {
    try {
        const { name, nodes, edges } = req.body;
        const userId = req.user.id;
        console.log("💾 Save Flow Payload:", { name, nodesLength: nodes.length, edgesLength: edges.length });
        console.log("👤 User ID from token:", userId);
        const existingFlow = await Flow_1.default.findOne({ userId, name });
        if (existingFlow) {
            existingFlow.nodes = nodes;
            existingFlow.edges = edges;
            await existingFlow.save();
            console.log("✅ Updated existing flow");
        }
        else {
            await Flow_1.default.create({ userId, name, nodes, edges });
            console.log("✅ Created new flow");
        }
        res.status(200).json({ message: "Flow saved successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to save flow", details: error });
    }
};
exports.saveFlow = saveFlow;
const loadFlow = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name } = req.query;
        const flow = await Flow_1.default.findOne({ userId, name });
        if (!flow) {
            res.status(404).json({ error: "Flow not found" });
        }
        res.status(200).json(flow);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to load flow", details: error });
    }
};
exports.loadFlow = loadFlow;
