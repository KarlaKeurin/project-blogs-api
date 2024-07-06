const { Router } = require('express');
const usersController = require('../controllers/users.controller');
const { validateLogin } = require('../middlewares/login');
const { validateUserCreate } = require('../middlewares/user');
const { validateToken } = require('../middlewares/token');

const usersRouter = Router();

usersRouter.post('/login', validateLogin, usersController.login);
usersRouter.post('/user', validateUserCreate, usersController.createUser);
usersRouter.get('/user', validateToken, usersController.getAll);
usersRouter.get('/user/:id', validateToken, usersController.getById);

module.exports = usersRouter;