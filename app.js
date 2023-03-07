const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parse');
const { ERROR_NOT_FOUND } = require('./errors/errors');
const routes = requere('./routes');
const routeUsers = require('./routes/users');
const routeCards = require('./routes/cards');

const LOCALHOST = 'mongodb://localhost:27017/mestodb';
// const LOCALHOST = 'mongodb://0.0.0.0:27017/mestodb';
// const LOCALHOST = 'mongodb://127.0.0.1:27017/mestodb';

const { PORT = 3000 } = process.env;

mongoose.connect(LOCALHOST);
mongoose.set('strictQuery', true);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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