import jwt from '../../utils/jwt';

module.exports.check = async (req, res, next) => {
  try {
    if (!req.headers.cookie) {
      return res.status(403).json({ msg: 'NO_AUTH' });
    }
    const token = req.headers.cookie.slice(4);
    let payload;

    try {
      payload = await jwt.verify(token);
    } catch (error) {
      return res.status(403).json({ msg: 'NO_JWT_AUTH' });
    }
    req.payload = payload;

    next();
  } catch (error) {
    next(error);
  }
};
