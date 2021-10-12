import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiError, { notFoundError } from './errors/apiError';
import errorHandler from './errors/errorHandler';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser('secret'));
app.use(express.json());

app.use(routes);

app.use(errorHandler);

app.use((req, res, next) => {
  next(apiError.notFoundError('Not Found'));
});

app.use((err, req, res, next) => {
  const { code, msg } = err;
  res.status(code).json({ msg });
});

export default app;
