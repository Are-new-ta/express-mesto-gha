const { ERROR_NOT_FOUND } = require('./errors');

// Код ответа на ошибку HTTP 404 Not Found указывает,
// что сервер не может найти запрошенный ресурс.

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_NOT_FOUND;
  }
}

module.exports = NotFoundError;
