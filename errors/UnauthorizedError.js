const { ERROR_UNAUTHORIZED } = require('./errors');

class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_UNAUTHORIZED;
  }
}

module.exports = UnAuthorizedError;
