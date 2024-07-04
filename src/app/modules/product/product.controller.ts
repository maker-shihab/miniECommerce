import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ProductServices } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProductFormDb(productData);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFormDb();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Here All products!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: 'Product not found',
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProducts,
};
