const express = require('express');
const router = express.Router();

const {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
} = require('../controllers/tag');

router.get('/', getAllTags);
router.get('/:id', getTagById);
router.post('/', createTag);
router.put('/:id', updateTag);
router.delete('/:id', deleteTag);

module.exports = router;
