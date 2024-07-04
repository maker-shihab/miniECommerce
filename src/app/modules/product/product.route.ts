import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/:productId', ProductController.getSingleProduct);
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoute = router;
