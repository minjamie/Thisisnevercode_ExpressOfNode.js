import { signInDao } from '../models';
import jwtToken from '../utils/jwt';
import bcrypt from 'bcrypt';
import AppError from '../errors/appError';
import { checkEmptyKeyOfValue, checkEmptyKey } from '../utils/checkValidation';

const signInUser = async (userInfo, _, next) => {
  const [userData] = await signInDao.getUserInfo(userInfo.email);

  if (userData === undefined) {
    next(new AppError.invalidError('INVALID_EMAIL'));
    return;
  }
  const validHashedPsw = await bcrypt.compare(
    userInfo.password,
    userData.password
  );

  if (!validHashedPsw) {
    next(new AppError.invalidError('INVALID_PASSWORD'));
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
