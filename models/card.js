const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const cardSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      validate: {
        validator: ({ length }) => length >= 2 && length <= 30,
        message: 'Имя карточки должно быть длиной от 2 до 30 символов',
      },
    },

    link: {
      required: true,
      type: String,
      validate: {
        validator: (url) => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(url),
        message: 'Введите корректный URL адрес',
      },
    },

    owner: {
      required: true,
      type: ObjectId,
      ref: 'user',
    },

    likes: [
      {
        type: ObjectId,
        ref: 'user',
        default: [],
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('card', cardSchema);
