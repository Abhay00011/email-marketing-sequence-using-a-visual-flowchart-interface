import { RequestHandler } from "express";
import Flow from "../models/Flow";

export const saveFlow: RequestHandler = async (req, res) => {
  try {
    const { name, nodes, edges } = req.body;
    const userId = (req as any).user.id;
    console.log("💾 Save Flow Payload:", { name, nodesLength: nodes.length, edgesLength: edges.length });
    console.log("👤 User ID from token:", userId);

    
    const existingFlow = await Flow.findOne({ userId, name });

    if (existingFlow) {
      existingFlow.nodes = nodes;
      existingFlow.edges = edges;
      await existingFlow.save();
      console.log("✅ Updated existing flow");
    } else {
      await Flow.create({ userId, name, nodes, edges });
      console.log("✅ Created new flow");
    }

    res.status(200).json({ message: "Flow saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save flow", details: error });
  }
};

export const loadFlow: RequestHandler = async (req, res) => {
  try {
    const userId = (req as any).user.id;
    const { name } = req.query;

    const flow = await Flow.findOne({ userId, name });

    if (!flow) {
      res.status(404).json({ error: "Flow not found" });
    }

    res.status(200).json(flow);
  } catch (error) {
    res.status(500).json({ error: "Failed to load flow", details: error });
  }
};
