const { verifyExistingPost, validateDataPost } = require('../utils/postUtils');

const validatePostCreate = async (req, res, next) => {
  const validation1 = verifyExistingPost(req.body);
  const validation2 = validateDataPost(req.body);
 
  if (validation1.message !== '') {
    return res.status(validation1.status).json({ message: validation1.message });
  }

  if (validation2.message !== '') {
    return res.status(validation2.status).json({ message: validation1.message });
  }
  
  next();
};

module.exports = {
  validatePostCreate,
};