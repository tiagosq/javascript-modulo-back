import mongoose, { Document, Schema } from "mongoose";

// Desenho da Tabela de usuários
interface IUser extends Document {
  email: string;
  password: string;
  role: string;
}

// A tabela na prática
const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false, default: 'guest' },
});

export default mongoose.model<IUser>('User', UserSchema);