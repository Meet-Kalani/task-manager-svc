const Joi = require('joi');

const tagValidationSchema = Joi.object({
  label: Joi.string().required().messages({
    'string.base': '"label" should be a type of text',
    'string.empty': '"label" cannot be empty',
    'any.required': '"label" is a required field'
  }),

  description: Joi.string().allow('').optional().messages({
    'string.base': '"description" should be a type of text'
  }),

  labelColor: Joi.string().allow('').optional().messages({
    'string.base': '"labelColor" should be a type of text'
  })
});

module.exports = tagValidationSchema;
