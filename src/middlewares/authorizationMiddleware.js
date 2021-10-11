import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

module.exports = (credentials = []) => {
  return (req, res, next) => {
    console.log('authorization middleware');
    // Allow for a string or array
    if (typeof credentials === 'string') {
      credentials = [credentials];
    }
    // Find JWT in headers
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).send('sorry pal: access denied');
    } else {
      // Validate JWT
      // Bearer yndusoIn..
      const tokenBody = token.slice(7);
      jwt.verify(tokenBody, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log(`JWT ERROR: ${err}`);
          return res.status(401).send('ERROR:Access Denied');
        }
        // Check for credential being passed in
        if (credentials.length > 0) {
          if (
            decoded.scopes &&
            decoded.scopes.length &&
            credentials.some((cred) => decoded.scopes.indexOf(cred) >= 0)
          ) {
            next();
          } else {
            return res.status(401).send('ERROR:Access Denied');
          }
        } else {
          // No credential required, user is authorization
          next();
        }
      });
    }
  };
};
