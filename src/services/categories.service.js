const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  }
  const category = await Category.create({ name });

  return { status: 'CREATED', data: category };
};

const getAll = async () => {
  const categories = await Category.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
      include: ['id', 'name'],
    },
  });

  return { status: 'OK', data: categories };
};

module.exports = {
  createCategory,
  getAll,
};