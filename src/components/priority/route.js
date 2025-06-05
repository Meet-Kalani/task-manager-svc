const express = require('express');

const router = express.Router();

const auth = require('../../middlewares/auth');

const {
  getAllPriorities,
  getPriorityById,
  createPriority,
  updatePriority,
  deletePriority
} = require('./controller');

router.use(auth);

router.get('/', getAllPriorities);
router.get('/:id', getPriorityById);
router.post('/', createPriority);
router.put('/:id', updatePriority);
router.delete('/:id', deletePriority);

module.exports = router;
