import { signUpService } from '../services';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';
import { checkEmptyKeyOfValue, checkEmptyKey } from '../utils/checkValidation';

const createUser = catchAsync(async (req, res, next) => {
  const userInfo = req.body;
  const KeyList = ['email', 'password', 'address', 'name'];

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

  const user = await signUpService.createUser(userInfo, res, next);

  if (user) {
    res.status(201).json({
      msg: 'SUCCESS_SIGNUP',
    });
  }
});

export default { createUser };
