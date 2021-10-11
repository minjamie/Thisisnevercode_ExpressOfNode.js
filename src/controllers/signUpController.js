import { signUpService } from '../services';

const createUser = async (req, res) => {
  try {
    const userInfo = req.body;
    if (
      userInfo.email !== '' &&
      userInfo.name !== '' &&
      userInfo.address !== '' &&
      userInfo.password !== ''
    ) {
      await signUpService.createUser(userInfo);
      res.status(201).json({
        msg: 'SUCCESS_SIGNUP',
      });
    } else {
      const error = new Error('EMPTY_VALUE');
      error.statusCode = 404;
      error.message = '값이 비어있습니다.';
      throw error;
    }
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode).json({
      msg: message,
    });
  }
};

export default { createUser };
