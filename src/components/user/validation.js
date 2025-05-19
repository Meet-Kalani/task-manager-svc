const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': '"name" should be a type of text',
    'string.empty': '"name" cannot be empty',
    'any.required': '"name" is a required field'
  }),

  email: Joi.string().email().required().messages({
    'string.base': '"email" should be a type of text',
    'string.email': '"email" must be a valid email',
    'string.empty': '"email" cannot be empty',
    'any.required': '"email" is a required field'
  }),

  password: Joi.string().min(6).required().messages({
    'string.base': '"password" should be a type of text',
    'string.empty': '"password" cannot be empty',
    'string.min': '"password" should have a minimum length of {#limit}',
    'any.required': '"password" is a required field'
  })
});

module.exports = userValidationSchema;
