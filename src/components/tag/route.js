const express = require('express');

const router = express.Router();

const auth = require('../../middlewares/auth');

const {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
} = require('./controller');

router.use(auth);

router.get('/', getAllTags);
router.get('/:id', getTagById);
router.post('/', createTag);
router.put('/:id', updateTag);
router.delete('/:id', deleteTag);

module.exports = router;
