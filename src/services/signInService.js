import { signInDao } from '../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const signInUser = async (email, password) => {
  const [userInfo] = await signInDao.getUserInfo(email);
  if (userInfo === undefined) {
    // 이메일이 유효하지 않은 경우
    const error = new Error('INVALID EMAIL');
    error.message = '유효하지 않은 이메일입니다.';
    error.statusCode = 403;
    throw error;
  }

  const validHashedPsw = await bcrypt.compare(password, userInfo.password);

  if (!validHashedPsw) {
    // 잘못된 비밀번호 경우
    const error = new Error('INVALID_PASSWORD');
    error.message = '잘못된  비밀번호입니다.';
    error.statusCode = 403;
    throw error;
  } else {
    // 비밀번호 + 이메일 맞는 경우
    const accessToken = jwt.sign(
      { id: userInfo.id, username: userInfo.name },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );
    return accessToken;
  }
};

export default { signInUser };
