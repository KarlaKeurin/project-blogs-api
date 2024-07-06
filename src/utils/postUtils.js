const verifyExistingPost = (body) => {
  const { title, content, categoryIds } = body;
  const response = { status: 400, message: '' };

  if (!title || !content || !categoryIds) {
    response.message = 'Some required fields are missing';
  }

  return response;
};

const validateDataPost = (body) => {
  const { categoryIds } = body;

  const response = { status: 400, message: '' };

  if (!Array.isArray(categoryIds)) {
    response.message = 'precisar ser um array';
  }

  if (categoryIds.length === 0) {
    response.message = 'o array precisa ter pelo menos um id';
  }
  
  if (!categoryIds.every((id) => typeof id === 'number' && id > 0)) {
    response.message = 'todos os ids tem que ser do tipo number';
  }

  return response;
};
  
module.exports = {
  verifyExistingPost,
  validateDataPost,
};