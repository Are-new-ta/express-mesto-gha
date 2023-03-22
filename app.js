const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
// eslint-disable-next-line no-unused-vars
const cors = require('cors');
const { errors } = require('celebrate');
// eslint-disable-next-line import/no-extraneous-dependencies
const rateLimit = require('express-rate-limit');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const LOCALHOST = 'mongodb://localhost:27017/mestodb';

const { PORT = 3000 } = process.env;

mongoose.connect(LOCALHOST);
mongoose.set('strictQuery', true);

const app = express();
app.use(express.json());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.use(errors());

// eslint-disable-next-line consistent-return
app.use((error, req, res) => {
  if (error.name === 'CastError' || error.name === 'ValidationError') {
    const { statusCode = 400 } = error;
    return res.status(statusCode).send({ message: 'Переданы некорректные данные пользователя' });
  }
  if (error.code === 11000) {
    const { statusCode = 409 } = error;
    return res.status(statusCode).send({ message: 'Пользователь с таким электронным адресом уже зарегистрирован' });
  }
});

app.listen(PORT);
