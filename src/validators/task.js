const Joi = require('joi');
const mongoose = require('mongoose');

const objectIdValidator = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message(
      `"${helpers.state.path.join('.')}" must be a valid ObjectId`
    );
  }
  return value;
};

const taskValidationSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.base': '"title" should be a type of text',
    'string.empty': '"title" cannot be empty',
    'any.required': '"title" is a required field'
  }),

  description: Joi.string().allow('').messages({
    'string.base': '"description" should be a type of text'
  }),

  status: Joi.string()
    .valid('Pending', 'In Progress', 'Completed', 'Archived')
    .default('Pending')
    .messages({
      'any.only':
        '"status" must be one of [Pending, In Progress, Completed, Archived]'
    }),

  priority: Joi.string()
    .valid('Low', 'Medium', 'High', 'Extreme')
    .default('Low')
    .messages({
      'any.only': '"priority" must be one of [Low, Medium, High, Extreme]'
    }),

  due_date: Joi.date().optional().messages({
    'date.base': '"due_date" must be a valid date'
  }),

  assigned_to: Joi.array()
    .items(Joi.string().custom(objectIdValidator))
    .messages({
      'array.base': '"assigned_to" must be an array of user ObjectIds'
    }),

  created_by: Joi.string().custom(objectIdValidator).messages({
    'string.base': '"created_by" must be a string',
    'any.custom': '"created_by" must be a valid ObjectId'
  }),

  tags: Joi.array().items(Joi.string().custom(objectIdValidator)).messages({
    'array.base': '"tags" must be an array of tag ObjectIds'
  })
});

module.exports = taskValidationSchema;
