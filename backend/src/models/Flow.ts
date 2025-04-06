import mongoose from "mongoose";

const FlowSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    nodes: { type: Array, required: true },
    edges: { type: Array, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Flow", FlowSchema);
