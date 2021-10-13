import { signUpDao } from '../models';
import AppError from '../errors/appError';
import bcrypt from 'bcrypt';

const makeHashedPsw = async (password) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPsw = await bcrypt.hash(password, salt);
  return hashedPsw;
};

const createUser = async (userInfo, _, next) => {
  const [userData] = await signUpDao.getUserInfoByEmail(userInfo.email);
  if (userData) {
    next(AppError.duplicatedError('DUPLICATED_EMAIL'));
  } else {
    userInfo.password = await makeHashedPsw(userInfo.password);
    return await signUpDao.createUser(userInfo);
  }
};

export default { createUser };
