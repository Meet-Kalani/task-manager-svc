const AppError = require('../../utils/AppError');
const sendResponse = require('../../utils/sendResponse');

const taskValidator = require('./validation');
const Task = require('./model');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    if (!tasks) return next(new AppError('Task not found', 404));
    return sendResponse(res, 200, true, tasks);
  } catch (error) {
    return next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new AppError('Task not found', 404));
    return sendResponse(res, 200, true, task);
  } catch (error) {
    return next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { error } = taskValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const tasks = await Task.create(req.body);
    return sendResponse(res, 200, true, tasks);
  } catch (error) {
    return next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { error } = taskValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const tasks = await Task.findByIdAndUpdate(req.params.id, req.body);
    return sendResponse(res, 200, true, tasks);
  } catch (error) {
    return next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.params.id);
    return sendResponse(res, 200, true, tasks);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
