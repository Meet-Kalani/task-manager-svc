const fs = require('fs');

const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('authorization');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const publicKey = fs.readFileSync('./keys/public.key');

  try {
    const decoded = jwt.verify(token, publicKey);
    req.user = decoded.userId ? { id: decoded.userId } : decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
