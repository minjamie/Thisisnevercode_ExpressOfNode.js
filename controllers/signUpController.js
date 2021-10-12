import { signUpService } from '../services';

const createUser = async (req, res) => {
  try {
    const userInfo = req.body;

    const userData = Object.entries(req.body);
    for (let userInputData of userData) {
      console.log(userInputData.length);
      if (userInputData.length < 0) {
        res.status(404).json({
          msg: 'KEY ERROR',
        });
      } else if (userInputData === 1) {
        const error = new Error('EMPTY_VALUE');
        error.statusCode = 404;
        error.message = '값이 비어있습니다.';
        throw error;
      } else {
        await signUpService.createUser(userInfo);
        res.status(201).json({
          msg: 'SUCCESS_SIGNUP',
        });
      }
    }
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode).json({
      msg: message,
    });
  }
};

export default { createUser };
