import { signInService } from '../services';
import jwt from 'jsonwebtoken';

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accessToken = await signInService.signInUser(email, password);
    const decoded = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );

    res.cookie('jwt', accessToken, {
      expires: new Date(Date.now() + 30000),
      httpOnly: true,
    });
    return res.status(201).json({
      msg: 'SUCCESS_SIGNIN',
      decoded,
    });
  } catch (error) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({
      msg: message,
    });
  }
};

export default { signInUser };
