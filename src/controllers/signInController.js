import { signInService } from '../services';
import jwtToken from '../../utils/jwt';

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await signInService.signInUser(email, password);

    const decodedToken = jwtToken.verify(accessToken);
    res.cookie('jwt', accessToken, {
      expires: new Date(Date.now() + 30000),
      httpOnly: true,
    });

    return res.status(201).json({
      msg: 'SUCCESS_SIGNIN',
      decodedToken,
    });
  } catch (error) {
    const { statusCode, message } = error;
    return res.status(404).json({
      msg: message,
    });
  }
};

export default { signInUser };
