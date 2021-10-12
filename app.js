import express from 'express';
import routes from './src/routes';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiErrorHandler from './src/error/errorHandle';

const app = express();

dotenv.config();

app.use(morgan('dev'));
app.use(cookieParser('secret'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(apiErrorHandler);
app.use((req, res, next) => {
  res.status(404).send('Not Found');
  next();
});

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  console.error(err);
  res.status(statusCode || 500).send(message);
});

module.exports = app;
