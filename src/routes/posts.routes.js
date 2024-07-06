const { Router } = require('express');
const postsController = require('../controllers/posts.controller');
const { validateToken } = require('../middlewares/token');
const { validatePostCreate } = require('../middlewares/post');

const postsRouter = Router();

postsRouter.post(
  '/post', 
  validateToken,
  validatePostCreate, 
  postsController.createPost,
);

module.exports = postsRouter;