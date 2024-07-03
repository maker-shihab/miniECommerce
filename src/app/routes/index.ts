import { Router } from 'express';

const router = Router();

const moduleRouters = [
  {
    path: '/orders',
    router: '',
  },
  {
    path: '/products',
    router: '',
  },
];

moduleRouters.forEach(route => router.use(route.path, route.route));

export default router;
