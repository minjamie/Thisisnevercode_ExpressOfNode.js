import { signInService } from '../services';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';
import jwtToken from '../utils/jwt';
import dotenv from 'dotenv';

dotenv.config();

const signInUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const userInputValue = Object.keys(req.body);
  const totalNumberOfUserInput = 2;

  if (userInputValue.length !== totalNumberOfUserInput) {
    next(AppError.keyError('키가 비어있습니다'));
    return;
  }

  const userInfo = req.body;
  const accessToken = await signInService.signInUser(userInfo, res, next);
  const decodedToken = await jwtToken.verify(accessToken);

  res.cookie('jwt', accessToken, {
    expiresIn: process.env.JWT_TTL,
    httpOnly: true,
  });

  if (accessToken) {
    res.status(200).json({
      msg: 'SUCCESS_SIGNIN',
      decodedToken,
    });
  }
});

export default { signInUser };
