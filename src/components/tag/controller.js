const AppError = require('../../utils/AppError');
const sendResponse = require('../../utils/sendResponse');

const Tag = require('./model');
const tagValidator = require('./validation');

const getAllTags = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    if (!tags) return next(new AppError('Tag not found', 404));
    return sendResponse(res, 200, true, tags);
  } catch (error) {
    return next(error);
  }
};

const getTagById = async (req, res, next) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) return next(new AppError('Tag not found', 404));
    return sendResponse(res, 200, true, tag);
  } catch (error) {
    return next(error);
  }
};

const createTag = async (req, res, next) => {
  try {
    const { error } = tagValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const tags = await Tag.create(req.body);
    return sendResponse(res, 200, true, tags);
  } catch (error) {
    return next(error);
  }
};

const updateTag = async (req, res, next) => {
  try {
    const { error } = tagValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const tags = await Tag.findByIdAndUpdate(req.params.id, req.body);
    return sendResponse(res, 200, true, tags);
  } catch (error) {
    return next(error);
  }
};

const deleteTag = async (req, res, next) => {
  try {
    const tags = await Tag.findByIdAndDelete(req.params.id);
    return sendResponse(res, 200, true, tags);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag
};
