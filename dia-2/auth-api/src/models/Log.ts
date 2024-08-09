import mongoose from "mongoose";

interface Log {
  user: mongoose.Schema.Types.ObjectId;
  token: string;
  action: string;
  created_at: Date;
};

const Log = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  token: { type: String },
  action: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<Log>("Log", Log);