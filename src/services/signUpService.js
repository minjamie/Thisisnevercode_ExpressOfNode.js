import { signUpDao } from '../models';

const createUser = async () => {
  const user = await signUpDao.createUser();
  return user;
};

export default { createUser };
