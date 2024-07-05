import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductFormDb = async (productData: TProduct) => {
  const restlt = await ProductModel.create(productData);
  return restlt;
};

const getAllProductsFormDb = async (query?: any) => {
  const restlt = await ProductModel.find(query);
  return restlt;
};

const getSingleProductFormDb = async (id: string) => {
  const restlt = await ProductModel.findById(id);
  return restlt;
};

const updateProductFormDb = async (id: string, productData: TProduct) => {
  const restlt = await ProductModel.findByIdAndUpdate(
    { _id: id },
    { $set: productData },
    { new: true },
  );

  return restlt;
};

const deleteProductFormDb = async (id: string) => {
  const restlt = await ProductModel.findByIdAndDelete(id);
  return restlt;
};

export const ProductServices = {
  createProductFormDb,
  getAllProductsFormDb,
  getSingleProductFormDb,
  updateProductFormDb,
  deleteProductFormDb,
};
