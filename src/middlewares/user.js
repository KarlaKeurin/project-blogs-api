const { User } = require('../models');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const displayNameMessage = '"displayName" length must be at least 8 characters long';
const emailMessage = '"email" must be a valid email';
const passwordMessage = '"password" length must be at least 6 characters long';

const validateUserCreate = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({ message: displayNameMessage });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: emailMessage });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: passwordMessage });
  }

  const findUser = await User.findOne({ where: { email } });

  if (findUser) { 
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateUserCreate, 
};