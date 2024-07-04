import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductFormDb = async (productData: TProduct) => {
  const restlt = await ProductModel.create(productData);
  return restlt;
};
const getAllProductsFormDb = async () => {
  const restlt = await ProductModel.find();
  return restlt;
};

export const ProductServices = {
  createProductFormDb,
  getAllProductsFormDb,
};
