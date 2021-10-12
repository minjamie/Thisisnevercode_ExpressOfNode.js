import apiError from './apiError';

function apiErrorHandler(err, req, res, next) {
  // in prod, don't use console.log or console.err
  // because it is not async
  console.error(err);
  if (err instanceof apiError) {
    res.status(err.code).json(err.msg);
    return;
  }
  res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;
