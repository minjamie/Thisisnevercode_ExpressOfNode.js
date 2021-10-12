import { signInService } from '../services';
import jwtToken from '../utils/jwt';
import apiError from '../errors/apiError';
import dotenv from 'dotenv';
dotenv.config();

const signInUser = async (req, res) => {
  try {
    const userInputValue = Object.keys(req.body);
    const totalNumberOfUserInput = 2;

    if (userInputValue.length !== totalNumberOfUserInput) {
      next(apiError.keyError('키가 비어있습니다'));
    }

    const { email, password } = req.body;

    const accessToken = await signInService.signInUser(email, password);
    const decodedToken = jwtToken.verify(accessToken);
    res.cookie('jwt', accessToken, {
      expiresIn: process.env.JWT_TTL,
      httpOnly: true,
    });

    return res.status(200).json({
      msg: 'SUCCESS_SIGNIN',
      decodedToken,
    });
  } catch (error) {
    // next(apiError.badRequest('잘못된 요청임당'));
    const { statusCode, message } = error;
    return res.status(statusCode).json({
      msg: message,
    });
  }
};

export default { signInUser };
