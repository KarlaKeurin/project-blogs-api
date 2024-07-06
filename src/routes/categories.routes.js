const { Router } = require('express');
const categoriesController = require('../controllers/categories.controller');
const { validateCategoryCreate } = require('../middlewares/category');
const { validateToken } = require('../middlewares/token');

const usersRouter = Router();

usersRouter.post(
  '/categories', 
  validateToken, 
  validateCategoryCreate, 
  categoriesController.createCategory,
);

usersRouter.get('/categories', validateToken, categoriesController.getAll);

module.exports = usersRouter;