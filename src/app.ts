import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import errorHandler from './app/middlewares/errorMiddleware';
import router from './app/routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', async (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Hello Mini ECommerce 💥',
  });
});

//global errors handler
app.use(errorHandler);

//Manage not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });

  next();
});

export default app;
