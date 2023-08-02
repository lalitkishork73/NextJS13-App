import { Schema, model, Types } from 'mongoose';
import { TaskModel } from '@/validation/typemodel/type.model';

const Task_Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    addedDate: {
      type: Date,
      required: true,
      default: Date.now()
    },

    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
    },

    userId: {
      type: Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

export default model<TaskModel>('tasks', Task_Schema);
