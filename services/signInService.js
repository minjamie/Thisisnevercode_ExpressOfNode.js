import { signInDao } from '../models';
import jwtToken from '../utils/jwt';
import bcrypt from 'bcrypt';
// import apiError from '../errors/apiError';

const signInUser = async (email, password, next) => {
  const [userInfo] = await signInDao.getUserInfo(email);
  if (userInfo === undefined) {
    // 이메일이 유효하지 않은 경우

    // next(apiError.badRequest('err'));

    // return;
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

    // 유틸 함수에 있는 jwt token 생성함수
    const token = jwtToken.generate({
      id: userInfo.id,
      username: userInfo.name,
    });

    return token;
  }
};

export default { signInUser };
