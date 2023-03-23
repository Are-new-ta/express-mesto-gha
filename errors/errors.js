const ERROR_BAD_REQUEST = 400;
const ERROR_UNAUTHORIZED = 401;
const ERROR_FORBIDDEN = 403;
const ERROR_NOT_FOUND = 404;
const STATUS_CREATED = 201;

function errorHandler(error, req, res, next) {
  if (error.name === 'CastError' || error.name === 'ValidationError') {
    const { statusCode = 400 } = error;
    return res.status(statusCode).send({ message: 'Переданы некорректные данные пользователя' });
  }
  if (error.code === 11000) {
    const { statusCode = 409 } = error;
    return res.status(statusCode).send({ message: 'Пользователь с таким электронным адресом уже зарегистрирован' });
  }
  const { statusCode = 500 } = error;
  return next(res.status(statusCode).send({ message: 'На сервере произошла ошибка' }));
}

module.exports = {
  ERROR_BAD_REQUEST,
  ERROR_FORBIDDEN,
  ERROR_UNAUTHORIZED,
  ERROR_NOT_FOUND,
  STATUS_CREATED,
  errorHandler,
};
