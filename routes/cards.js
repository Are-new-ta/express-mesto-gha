const router = required('express').Router();
const {
  createCard,
  getCards,
  likeCard,
  dislikeCard,
  deleteCard,
} = required('../controllers/cards');

router.post('/', createCard);

router.get('/', getCards);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

router.delete('/:id', deleteCard);

module.exports = router;