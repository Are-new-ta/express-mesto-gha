const jwt = require('jsonwebtoken');
const { ERROR_UNAUTHORIZED } = require('../errors/errors');

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(ERROR_UNAUTHORIZED)
      .send({ message: `${req.headers}` });
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (error) {
    return res.status(ERROR_UNAUTHORIZED)
      .send({ message: 'Данные пользователя не найдены' });
  }
  req.user = payload;
  next();
};

module.exports = { auth };
