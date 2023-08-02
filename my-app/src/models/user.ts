import mongoose, { Schema, model } from 'mongoose';
import { UserModel } from '@/validation/typemodel/type.model';
const User_Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: { type: String, required: true },
    profileURL: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.users ||
  model<UserModel>('users', User_Schema);
