// const { cat, error } = require('shelljs');
const postsService = require('../services/posts.service');
const { getHttpCode } = require('../utils/httpMap');

const createPost = async (req, res) => {
  try {
    const { id } = res.locals.user;
    const { status, data } = await postsService.createPost(req.body, id);
    const code = getHttpCode(status);
  
    console.log('PASSOU AQUI');
  
    return res.status(code).json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
};