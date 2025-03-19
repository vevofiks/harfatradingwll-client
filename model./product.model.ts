// models/Product.ts
import mongoose, { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  price: number;
  category: mongoose.Types.ObjectId;
  isBlocked: boolean;
  createdAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  isBlocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || model<IProduct>('Product', ProductSchema);