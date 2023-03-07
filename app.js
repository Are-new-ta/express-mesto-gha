const express = require('express');
const mongoose = require('mongoose');
const { ERROR_NOT_FOUND } = require('./errors/errors');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const LOCALHOST = 'mongodb://localhost:27017/mestodb';

const { PORT = 3000 } = process.env;

mongoose.connect(LOCALHOST);
mongoose.set('strictQuery', true);

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64078894de9ebed33b14dad2',
  };
  next();
})

app.use('/users', routeUsers);
app.use('/cards', routeCards);
app.use((req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: 'Запрашиваемая страница не найдена' });
});
app.listen(PORT);