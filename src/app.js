const express = require('express');
require('express-async-errors');
const usersRouter = require('./routes/users.routes');
const categoriesRouter = require('./routes/categories.routes');
const postsRouter = require('./routes/posts.routes');
// ...

const app = express();
app.use(express.json());
app.use('/', usersRouter);
app.use('/', categoriesRouter);
app.use('/', postsRouter);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// ....

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
