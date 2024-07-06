const { BlogPost, PostCategory, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }, userId) => {
  const responsesInPromise = categoryIds.map((id) => Category.findByPk(id));
  
  const responses = await Promise.all(responsesInPromise);
  
  if (responses.some((response) => response === null)) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }

  const published = Date.now();
  const updated = Date.now();

  const post = await BlogPost.create({ title, content, userId, published, updated });
  console.log(post.dataValues.id);
  
  const response = categoryIds.map((categoryId) => PostCategory
    .create({ postId: post.dataValues.id, categoryId }));

  await Promise.all(response);

  return { status: 'CREATED', data: post };
};

module.exports = {
  createPost,
};