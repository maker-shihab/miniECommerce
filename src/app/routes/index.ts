import { Router } from 'express';
import { OrderRoute } from '../modules/order/order.route';
import { ProductRoute } from '../modules/product/product.route';

const router = Router();

const moduleRouters = [
  {
    path: '/orders',
    route: OrderRoute,
  },
  {
    path: '/products',
    route: ProductRoute,
  },
];

moduleRouters.forEach(route => router.use(route.path, route.route));

export default router;
