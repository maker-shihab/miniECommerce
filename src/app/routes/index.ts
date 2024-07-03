import { Router } from 'express';
import { ProductRoute } from '../modules/product/product.route';

const router = Router();

const moduleRouters = [
  // {
  //   path: '/orders',
  //   router: '',
  // },
  {
    path: '/products',
    router: ProductRoute,
  },
];

moduleRouters.forEach(route => router.use(route.path, route.router));

export default router;
