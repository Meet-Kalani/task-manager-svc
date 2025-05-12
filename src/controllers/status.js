const Status = require('../models/status');
const AppError = require('../utils/AppError');
const statusValidator = require('../validators/status');

const getAllStatuses = async (req, res, next) => {
  try {
    const statuses = await Status.find();
    if (!statuses) return next(new AppError('Status not found', 404));
    res.status(200).json(statuses);
  } catch (error) {
    next(error);
  }
};

const getStatusById = async (req, res, next) => {
  try {
    const status = await Status.findById(req.params.id);
    if (!status) return next(new AppError('Status not found', 404));
    res.status(200).json(status);
  } catch (error) {
    next(error);
  }
};

const createStatus = async (req, res, next) => {
  try {
    const { error } = statusValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const statuses = await Status.create(req.body);
    res.status(200).json(statuses);
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { error } = statusValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const statuses = await Status.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(statuses);
  } catch (error) {
    next(error);
  }
};

const deleteStatus = async (req, res, next) => {
  try {
    const statuses = await Status.findByIdAndDelete(req.params.id);
    res.status(200).json(statuses);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
};
