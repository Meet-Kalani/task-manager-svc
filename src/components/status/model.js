const { Schema, model } = require('mongoose');

const statusSchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Status = model('Status', statusSchema);

module.exports = Status;
