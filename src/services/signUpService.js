import { listDao } from '../models';

const signUpUser = async () => {
  const user = await signUpDao.signUpUser();
  return user;
};

export default { signUpUser };
