const Card = require('../models/card');

const {
  ERROR_BAD_REQUEST,
  ERROR_NOT_FOUND,
  ERROR_INTERNAL_SERVER,
  STATUS_CREATED,
} = require('../errors/errors');

// создаем карточку
const createCard = (req, res) => {
  const { name, link } = req.body;
  const { _id: userId } = req.user;
  Card.create({ name, link, owner: userId })
    .then((card) => res.status(STATUS_CREATED).send({ data: card }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные при создании карточки' });
      } else {
        res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

// возвращает все карточки
const getCards = (req, res) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' }));
};

// поставить лайк карточке
const likeCard = (req, res) => {
  const { cardId } = req.params;
  const { _id: userId } = req.user;
  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: userId } }, { new: true })
    .then((card) => {
      if (card) {
        return res.send({ data: card });
      }
      return res.status(ERROR_NOT_FOUND).send({ message: 'Карточка с указанным id не найдена' });
    })
    .catch((error) => {
      if (error.name === 'CastError' || error.name === 'ValidationError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
    });
};

// убрать лайк с карточки
const dislikeCard = (req, res) => {
  const { cardId } = req.params;
  const { _id: userId } = req.user;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: userId } }, { new: true })
    .then((card) => {
      if (card) {
        return res.send({ data: card });
      }
      return res.status(ERROR_NOT_FOUND).send({ message: 'Карточка с указанным id не найдена' });
    })
    .catch((error) => {
      if (error.name === 'CastError' || error.name === 'ValidationError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
    });
};

const deleteCard = (req, res) => {
  const { id } = req.params;

  Card.findByIdAndRemove(id)
    .then((card) => {
      if (card) {
        return res.send({ data: card });
      }
      return res.status(ERROR_NOT_FOUND).send({ message: 'Карточка с указанным id не найдена' });
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(ERROR_INTERNAL_SERVER).send({ message: 'Внутренняя ошибка сервера' });
    });
};

module.exports = {
  createCard,
  getCards,
  likeCard,
  dislikeCard,
  deleteCard,
};
