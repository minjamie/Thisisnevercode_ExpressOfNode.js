import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 8000;

// 변경사항 0. 폴더 구조 src안에 라우트~모델까지 다 넣음
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
