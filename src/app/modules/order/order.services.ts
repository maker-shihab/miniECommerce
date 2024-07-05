import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.modle';

const createOrderFormDb = async (order: TOrder) => {
  const orderId = order?.productId;

  const product = await ProductModel.findByIdAndUpdate(
    { _id: orderId },
    { $inc: { 'inventory.quantity': -order.quantity } },
    { new: true },
  );

  if (!product) {
    throw new Error('Product not found');
  }

  const restlt = await OrderModel.create(order);

  return restlt;
};

const getAllOrdersFormDb = async (email?: string) => {
  const emailQuery = email ? { email } : {};
  const restlt = await OrderModel.find(emailQuery);
  return restlt;
};

export const OrderServices = {
  createOrderFormDb,
  getAllOrdersFormDb,
};
