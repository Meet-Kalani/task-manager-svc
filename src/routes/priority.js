const express = require('express');
const router = express.Router();

const {
  getAllPriorities,
  getPriorityById,
  createPriority,
  updatePriority,
  deletePriority
} = require('../controllers/priority');

router.get('/', getAllPriorities);
router.get('/:id', getPriorityById);
router.post('/', createPriority);
router.put('/:id', updatePriority);
router.delete('/:id', deletePriority);

module.exports = router;
