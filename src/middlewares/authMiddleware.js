import jwt from '../../utils/jwt';

module.exports.check = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      console.log(req.headers.authorization);
      return res.status(403).json({ msg: 'NO_AUTH' });
    }
    const token = req.headers.authorization.split(' ')[1];

    let payload;

    try {
      payload = jwt.verify(token);
    } catch (error) {
      return res.status(403).json({ msg: 'NO_JWT_AUTH' });
    }
    req.payload = payload;
    next();
  } catch (error) {
    next(error);
  }
};
