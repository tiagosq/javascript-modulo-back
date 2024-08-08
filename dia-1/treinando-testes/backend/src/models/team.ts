import mongoose, { Document, Schema } from 'mongoose';

interface ITeam extends Document {
  name: string;
  foundationYear: number;
  state: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  foundationYear: { type: Number, required: true },
  state: { type: String, required: true }
});

export default mongoose.model<ITeam>('Team', teamSchema);
