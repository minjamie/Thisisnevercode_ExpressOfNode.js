import apiError from './apiError';

function apiErrorHandler(err, req, res, next) {
  // console.error(err);
  if (err instanceof apiError) {
    res.status(err.code).json(err.msg);
    return;
  }
  res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;
