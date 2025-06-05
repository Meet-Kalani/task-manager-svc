const { Schema, model } = require('mongoose');

const prioritySchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    weight: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const Priority = model('Priority', prioritySchema);

module.exports = Priority;
