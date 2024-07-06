const categoriesService = require('../services/categories.service');
const { getHttpCode } = require('../utils/httpMap');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoriesService.createCategory(name);
  const code = getHttpCode(status);

  return res.status(code).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await categoriesService.getAll([]);
  const code = getHttpCode(status);

  return res.status(code).json(data);
};

module.exports = {
  createCategory,
  getAll,
};