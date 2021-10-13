import { signInService } from '../services';
import { checkEmptyKeyOfValue, checkEmptyKey } from '../utils/checkValidation';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';
import jwtToken from '../utils/jwt';
import dotenv from 'dotenv';

dotenv.config();

const signInUser = catchAsync(async (req, res, next) => {
  const userInfo = req.body;
  const KeyList = ['email', 'password'];

  const emptyKey = checkEmptyKey(KeyList, userInfo);
  if (emptyKey.length !== 0) {
    next(new AppError.keyError(`${emptyKey} 키가 비어있습니다`));
    return;
  }

  const emptyKeyOfValue = checkEmptyKeyOfValue(userInfo);
  if (emptyKeyOfValue) {
    next(
      new AppError.valueOfKeyError(`키의 ${emptyKeyOfValue} 값이 비어있습니다`)
    );
    return;
  }

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
