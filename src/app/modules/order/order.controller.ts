import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { OrderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderFormDb(orderData);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Order not found',
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  try {
    const result = email
      ? await OrderServices.getAllOrdersFormDb(email)
      : await OrderServices.getAllOrdersFormDb();

    if (result.length === 0) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'No orders found',
      });
    }

    return res.status(httpStatus.OK).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Order not found',
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
