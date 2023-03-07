const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    validate: {
      validator: ({ length }) => length >= 2 && length <= 30,
      message: 'Имя пользователя должно быть длиной от 2 до 30 символов',
    },
  },

  about: {
    required: true,
    type: String,
    validate: {
      validator: ({ length }) => length >= 2 && length <= 30,
      message: 'Информация о пользователе должна быть длиной от 2 до 30 символов',
    },
  },

  avatar: {
    required: true,
    type: String,
  },
},
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('user', userSchema);

