const usersService = require('../services/users.service');
const { getHttpCode } = require('../utils/httpMap');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await usersService.login(email, password);
  const code = getHttpCode(status);

  res.status(code).json(data);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await usersService.createUser(displayName, email, password, image);
  const code = getHttpCode(status);

  return res.status(code).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await usersService.getAll([]);
  const code = getHttpCode(status);

  return res.status(code).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await usersService.getById(id);
  const code = getHttpCode(status);

  return res.status(code).json(data);
};

module.exports = {
  login,
  createUser,
  getAll,
  getById,
};