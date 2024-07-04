import { TOrder } from './order.interface';
import { OrderModel } from './order.modle';

const createOrderFormDb = async (order: TOrder) => {
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
