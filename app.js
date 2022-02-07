require("dotenv").config();
const express = require("express");

// DB config
require("./configs/db.config");

const app = express();

// Middleware config
require("./configs/middleware.config")(app);
require("./configs/cors.config")(app);

// Session config + Passport
require("./configs/session.config")(app);
// remember, code execute in line
// passport uses session so session comes first tham passport
require("./configs/passport.config")(app);

const userRouter = require('./routes/users.routes');
const authRouter = require('./routes/auth.routes');

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

//  Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: "Not found"});
})

module.exports = app;