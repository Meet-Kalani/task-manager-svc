const express = require('express');
const router = express.Router();

const {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
} = require('./controller');
const auth = require('../../middlewares/auth');

router.use(auth);

router.get('/', getAllStatuses);
router.get('/:id', getStatusById);
router.post('/', createStatus);
router.put('/:id', updateStatus);
router.delete('/:id', deleteStatus);

module.exports = router;
