import { signUpDao } from '../models';
import bcrypt from 'bcrypt';

const makeHashedPsw = async (password) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPsw = await bcrypt.hash(password, salt);
  return hashedPsw;
};

const createUser = async (userInfo) => {
  const [userData] = await signUpDao.getUserInfoByEmail(userInfo.email);
  if (userData) {
    // 이미 가입된 유저인 경우
    const error = new Error('DUPLICATED EMAIL');
    error.message = '중복된 이메일입니다.';
    error.statusCode = 409;
    throw error;
  } else {
    // 신규 회원인 경우
    userInfo.password = await makeHashedPsw(userInfo.password);
    await signUpDao.createUser(userInfo);
  }
};

export default { createUser };
