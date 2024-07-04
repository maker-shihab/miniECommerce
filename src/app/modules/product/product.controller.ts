import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ProductServices } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProductFormDb(productData);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product created successfully!',
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
  const searchTerm = req.query.searchTerm as string;

  try {
    let addQuery: any = {};

    if (searchTerm) {
      addQuery.$or = [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
      ];
    }

    const result = searchTerm
      ? await ProductServices.getAllProductsFormDb(addQuery)
      : await ProductServices.getAllProductsFormDb();

    if (result.length === 0) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: searchTerm
          ? `No products found matching the search term '${searchTerm}'`
          : 'No products found',
      });
    }

    return res.status(httpStatus.OK).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: error.message || 'Something went wrong',
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const result = await ProductServices.getSingleProductFormDb(productId);

    if (!result) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Product not found!',
      });
    } else {
      return res.status(httpStatus.OK).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Product not found!',
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const { productData } = req.body;

    const result = await ProductServices.updateProductFormDb(
      productId,
      productData,
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: error.message || 'Something went wrong',
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductServices.deleteProductFormDb(productId);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: error.message || 'Something went wrong',
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
