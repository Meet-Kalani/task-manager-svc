const express = require('express');

const router = express.Router();

const auth = require('../../middlewares/auth');

const {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
} = require('./controller');

router.use(auth);

router.get('/', getAllStatuses);
router.get('/:id', getStatusById);
router.post('/', createStatus);
router.put('/:id', updateStatus);
router.delete('/:id', deleteStatus);

module.exports = router;
