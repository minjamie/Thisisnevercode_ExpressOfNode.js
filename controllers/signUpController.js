import { signUpService } from '../services';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';

const createUser = catchAsync(async (req, res, next) => {
  const userInputValue = Object.keys(req.body);
  const totalNumberOfUserInput = 4;

  if (userInputValue.length !== totalNumberOfUserInput) {
    next(new AppError.keyError('키가 비어있습니다'));
    return;
  }

  const userInfo = req.body;

  const user = await signUpService.createUser(userInfo, res, next);

  if (user) {
    res.status(201).json({
      msg: 'SUCCESS_SIGNUP',
    });
  }
});

export default { createUser };
