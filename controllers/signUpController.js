import { signUpService } from '../services';

const createUser = async (req, res) => {
  try {
    const userInfo = req.body;

    const userInputValue = Object.keys(req.body);
    const totalNumberOfUserInput = 4;
    if (userInputValue.length !== totalNumberOfUserInput) {
      const error = new Error('Key_Error');
      error.statusCode = 404;
      error.message = '키가 비어있습니다.';
      throw error;
    }

    await signUpService.createUser(userInfo);
    res.status(201).json({
      msg: 'SUCCESS_SIGNUP',
    });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(400).json({
      msg: message,
    });
  }
};

export default { createUser };
