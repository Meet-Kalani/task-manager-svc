const Task = require('../models/task');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const tasks = await Task.findById(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createTask = async (req, res, next) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateTask = async (req, res, next) => {
  try {
    const tasks = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
