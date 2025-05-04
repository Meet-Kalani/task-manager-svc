const Task = require('../models/task');
const AppError = require('../utils/AppError');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    if (!task) return next(new AppError('Task not found', 404));
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new AppError('Task not found', 404));
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const tasks = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
