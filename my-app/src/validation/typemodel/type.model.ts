import { Types, Document } from 'mongoose';
export interface UserPost {
  name: string;
  email: string;
  password: string;
  about: string;
  profileURL: string;
}
export interface UserModel extends UserPost, Document {}

export interface TaskPost {
  title: string;
  content: string;
  addedDate: Date;
  status: string;
  userId: Types.ObjectId;
}
export interface TaskModel extends TaskPost, Document {}
