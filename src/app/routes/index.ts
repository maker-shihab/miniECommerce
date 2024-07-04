import { Router } from 'express';
import { OrderRoute } from '../modules/order/order.route';
import { ProductRoute } from '../modules/product/product.route';

const router = Router();

const moduleRouters = [
  {
    path: '/orders',
    router: OrderRoute,
  },
  {
    path: '/products',
    router: ProductRoute,
  },
];

moduleRouters.forEach(route => router.use(route.path, route.router));

export default router;
