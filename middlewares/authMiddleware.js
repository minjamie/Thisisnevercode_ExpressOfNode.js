import jwt from '../utils/jwt';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';

module.exports.check = catchAsync(async (req, res, next) => {
  if (!req.headers.cookie) {
    next(new AppError.checkAuth('NO_AUTH'));
    return;
  }
  const accessToken = req.headers.cookie.slice(4);
  let payload;

  payload = await jwt.verify(accessToken);

  if (!payload) {
    next(new AppError.checkJWTAuth("NO_JWT_AUTH'"));
    return;
  }
  res.status(200).json({
    msg: 'you are authUser',
  });
});
