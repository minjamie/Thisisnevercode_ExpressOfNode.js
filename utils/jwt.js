import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

module.exports.generate = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TTL,
    });
  } catch (err) {
    throw err;
  }
};

module.exports.verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
