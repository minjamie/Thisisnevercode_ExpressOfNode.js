import express from 'express';
import router from './src/routes';
const app = express();

dotenv.config();

app.use(morgan('dev'));
app.use(cookieParser('secret'));

app.use(express.urlencoded({ extended: true }));

app.use(routes);
// 1. 수정 사항 router => routes로 수정

// 모든 라우터를 검색하고 안떴을 때 나오는 화면
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
