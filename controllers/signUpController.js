import { signUpService } from '../services';

const signUpUser = async (req, res) => {
  const user = await signUpService.signUpUser();
  res.status(200).json({
    msg: 'SUCCESS',
    user,
  });
};

export default { signUpUser };
