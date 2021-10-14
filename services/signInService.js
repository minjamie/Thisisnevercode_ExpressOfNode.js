import { signInDao } from '../models';
import jwtToken from '../utils/jwt';
import bcrypt from 'bcrypt';
import AppError from '../errors/appError';

const signInUser = async (userInfo, _, next) => {
  const [userData] = await signInDao.getUserInfo(userInfo.email);
  console.log(userData);

  if (userData === undefined) {
    next(new AppError.invalidError('유효하지 않은 이메일입니다.'));
    return;
  }
  const validHashedPsw = await bcrypt.compare(
    userInfo.password,
    userData.password
  );

  if (!validHashedPsw) {
    next(new AppError.invalidError('잘못된 패스워드입니다.'));
    return;
  } else {
    const token = jwtToken.generate({
      id: userInfo.id,
      username: userInfo.name,
    });
    return token;
  }
};

export default { signInUser };
