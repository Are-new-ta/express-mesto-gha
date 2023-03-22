const { ERROR_FORBIDDEN } = require('./errors');

// Код ответа на статус ошибки "HTTP 403 Forbidden" указывает,
// что сервер понял запрос, но отказывается его авторизовать

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_FORBIDDEN;
  }
}

module.exports = ForbiddenError;
