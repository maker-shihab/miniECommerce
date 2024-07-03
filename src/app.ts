import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import errorHandler from './app/middlewares/errorMiddleware';

const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api");

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
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });

  next();
});

export default app;
