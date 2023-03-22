const { ERROR_BAD_REQUEST } = require('./errors');

// Код состояния ответа "HTTP 400 Bad Request" указывает,
// что сервер не смог понять запрос из-за недействительного синтаксиса.
// Kлиент не должен повторять этот запрос без изменений.

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_BAD_REQUEST;
  }
}

module.exports = BadRequestError;
