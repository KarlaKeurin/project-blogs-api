const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [, token] = authorization.split(' ');

  try {
    const claims = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = {
      id: claims.id,
      displayName: claims.displayName,
      email: claims.email,
    };
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = { validateToken };
