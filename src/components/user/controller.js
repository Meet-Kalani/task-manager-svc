const fs = require('fs');

const jwt = require('jsonwebtoken');

const User = require('./model');
const userValidator = require('./validation');

const privateKey = fs.readFileSync('./keys/private.key');

const register = async (req, res, next) => {
  try {
    const { error } = userValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists!' });
    }

    const user = await User.create(req.body);

    const payload = {
      userId: user._id
    };

    const token = await jwt.sign(payload, privateKey, { algorithm: 'RS256' });

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { error } = userValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid credentials!' });
    }

    if (user.password !== req.body.password) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid credentials!' });
    }

    const payload = {
      userId: user._id
    };

    const token = await jwt.sign(payload, privateKey, { algorithm: 'RS256' });

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login
};
