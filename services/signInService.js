import { signInDao } from '../../models';

const signInUser = async () => {
  console.log('3', signInDao);

  const user = await signInDao.signInUser();
  return user;
};

export default { signInUser };
