const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, _password) => {
  const user = await User.findOne({ where: { email } });

  const token = jwt.sign(
    {
      id: user.id, displayName: user.display_name, email: user.email, 
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '7h' },
  );

  return { status: 'OK', data: { token } };
};

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });

  const token = jwt.sign(
    { id: user.id, displayName: user.display_name, email: user.email }, 
    process.env.JWT_SECRET,

    { expiresIn: '7h' },
  );

  return { status: 'CREATED', data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { 
      exclude: ['password'],
      include: ['id', 'displayName', 'email', 'image'],
    },
  });

  return { status: 'OK', data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { 
      exclude: ['password'],
      include: ['id', 'displayName', 'email', 'image'],
    },
  });

  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { status: 'OK', data: user };
};

module.exports = {
  login,
  createUser,
  getAll,
  getById,
};