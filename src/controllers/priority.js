const Priority = require('../models/priority');
const AppError = require('../utils/AppError');
const priorityValidator = require('../validators/priority');

const getAllPriorities = async (req, res, next) => {
  try {
    const priorities = await Priority.find();
    if (!priorities) return next(new AppError('Priority not found', 404));
    res.status(200).json(priorities);
  } catch (error) {
    next(error);
  }
};

const getPriorityById = async (req, res, next) => {
  try {
    const priority = await Priority.findById(req.params.id);
    if (!priority) return next(new AppError('Priority not found', 404));
    res.status(200).json(priority);
  } catch (error) {
    next(error);
  }
};

const createPriority = async (req, res, next) => {
  try {
    const { error } = priorityValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const priority = await Priority.create(req.body);
    res.status(200).json(priority);
  } catch (error) {
    next(error);
  }
};

const updatePriority = async (req, res, next) => {
  try {
    const { error } = priorityValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const priority = await Priority.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(priority);
  } catch (error) {
    next(error);
  }
};

const deletePriority = async (req, res, next) => {
  try {
    const priority = await Priority.findByIdAndDelete(req.params.id);
    res.status(200).json(priority);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPriorities,
  getPriorityById,
  createPriority,
  updatePriority,
  deletePriority
};
