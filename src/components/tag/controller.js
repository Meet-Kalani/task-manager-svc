const AppError = require('../../utils/AppError');

const Tag = require('./model');
const tagValidator = require('./validation');

const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    if (!tags) return next(new AppError('Tag not found', 404));
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

const getTagById = async (req, res, next) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) return next(new AppError('Tag not found', 404));
    res.status(200).json(tag);
  } catch (error) {
    next(error);
  }
};

const createTag = async (req, res, next) => {
  try {
    const { error } = tagValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

const updateTag = async (req, res, next) => {
  try {
    const { error } = tagValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const tags = await Tag.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    const tags = await Tag.findByIdAndDelete(req.params.id);
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
};
