// models/Category.ts
import mongoose, { Schema, model, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  isBlocked: boolean;
  createdAt: Date;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  isBlocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Category || model<ICategory>('Category', CategorySchema);