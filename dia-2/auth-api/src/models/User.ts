import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';

interface User extends Document {
  _id: string;
  email: string;
  password: string;
};

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

User.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

User.methods.comparePassword = (password: string) => {
  // @ts-expect-error This exists but the condition is ignored.
  return bcrypt.compare(password, this.password);
}

export default mongoose.model<User>('User', User);