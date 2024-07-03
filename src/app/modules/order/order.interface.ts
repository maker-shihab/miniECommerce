import mongoose from 'mongoose';

export type TOrder = {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
};
