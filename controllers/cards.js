const Card = require('../models/card');

const {
  ERROR_BAD_REQUEST,
  ERROR_NOT_FOUND,
  ERROR_INTERNAL_SERVER,
  STATUS_CREATED,
  STATUS_OK
} = require('../errors/errors');

//создаем карточку
const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id: userId } = req.user;
  Card.create({ name, link, owner: userId })
    .then((card) => res.status(STATUS_CREATED).send({ data: card }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные при создании карточки' })
      } else {
        res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' })
      }
      next(error);
    });

};

//возвращает все карточки
const getCards = (req, res, next) => {
  User.find({})
    .then((cards) => res.status(STATUS_OK).send({ data: cards }))
    .catch(() => res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' }))
};

//поставить лайк карточке
const likeCard = (req, res, next) => {
  const { cardId } = req.params;
  const { _id: userId } = req.user;
  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: userId } }, { new: true },)
    .then((card) => {
      if (card) {
        res.status(STATUS_OK).send({ data: card });
        return;
      } else {
        res.status(ERROR_NOT_FOUND).send({ message: 'Карточка с указанным id не найдена' });
        return;
      }
    })
    .catch((error) => {
      if (error.name === 'CastError' || error.name === 'ValidationError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
        return;
      } else {
        res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      next(error);
    });
}

//убрать лайк с карточки
const dislikeCard = (req, res, next) => {
  const { cardId } = req.params;
  const { _id: userId } = req.user;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: userId } }, { new: true },)
    .then((card) => {
      if (card) {
        res.status(STATUS_OK).send({ data: card });
        return;
      } else {
        res.status(ERROR_NOT_FOUND).send({ message: 'Карточка с указанным id не найдена' });
        return;
      }
    })
    .catch((error) => {
      if (error.name === 'CastError' || error.name === 'ValidationError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
        return;
      } else {
        res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      next(error);
    });
}

const deleteCard = (req, res, next) => {
  const { id } = req.params;

  Card.findByIdAndRemove(id)
    .then((card) => {
      if (card) {
        res.status(STATUS_OK).send({ data: card });
        return;
      } else {
        res.status(ERROR_NOT_FOUND).send({ message: 'Карточка с указанным id не найдена' });
        return;
      }
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
        return;
      } else {
        res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      next(error);
    });
}

module.exports = {
  createCard,
  getCards,
  likeCard,
  dislikeCard,
  deleteCard,
};