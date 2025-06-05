const AppError = require('../../utils/AppError');
const sendResponse = require('../../utils/sendResponse');

const Status = require('./model');
const statusValidator = require('./validation');

const getAllStatuses = async (req, res, next) => {
  try {
    const statuses = await Status.find();
    if (!statuses) return next(new AppError('Status not found', 404));
    return sendResponse(res, 200, true, statuses);
  } catch (error) {
    return next(error);
  }
};

const getStatusById = async (req, res, next) => {
  try {
    const status = await Status.findById(req.params.id);
    if (!status) return next(new AppError('Status not found', 404));
    return sendResponse(res, 200, true, status);
  } catch (error) {
    return next(error);
  }
};

const createStatus = async (req, res, next) => {
  try {
    const { error } = statusValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const statuses = await Status.create(req.body);
    return sendResponse(res, 200, true, statuses);
  } catch (error) {
    return next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { error } = statusValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const statuses = await Status.findByIdAndUpdate(req.params.id, req.body);
    return sendResponse(res, 200, true, statuses);
  } catch (error) {
    return next(error);
  }
};

const deleteStatus = async (req, res, next) => {
  try {
    const statuses = await Status.findByIdAndDelete(req.params.id);
    return sendResponse(res, 200, true, statuses);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
};
