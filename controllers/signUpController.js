import { signUpService } from '../services';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';
import {
  checkEmptyKeyOfValue,
  checkEmptyKey,
  checkEmptyPolicyAgree,
} from '../utils/checkValidation';

const createUser = catchAsync(async (req, res, next) => {
  const userInfo = req.body;
  const KeyList = ['이메일', '패스워드', '주소', '이름'];
  console.log(userInfo);

  const emptyKey = checkEmptyKey(KeyList, userInfo);
  if (emptyKey.length !== 0) {
    next(new AppError.keyError(`${emptyKey} 키가 비어있습니다`));
    return;
  }

  const emptyKeyOfValue = checkEmptyKeyOfValue(userInfo);
  if (emptyKeyOfValue) {
    next(new AppError.valueOfKeyError(`${emptyKeyOfValue}을(를) 입력해주세요`));
    return;
  }

  // const emptyPolicyAgree = checkEmptyPolicyAgree(userInfo);
  // if (emptyPolicyAgree) {
  //   next(new AppError.checkPolicyAgreeError('필수항목에 동의해주세요'));
  // }

  const user = await signUpService.createUser(userInfo, res, next);

  if (user) {
    res.status(201).json({
      status: 'SUCCESS',
      message: '회원가입에 성공했습니다.',
    });
  }
});

export default { createUser };
