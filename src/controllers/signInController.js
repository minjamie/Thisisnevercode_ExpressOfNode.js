import { signInService } from '../services';

const signInUser = async (req, res) => {
  console.log('2', signInService);
  const user = await signInService.signInUser();
  res.status(200).json({
    msg: 'SUCCESS',
    user,
  });
};

export default { signInUser };
