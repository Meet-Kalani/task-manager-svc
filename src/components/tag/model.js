const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    labelColor: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Tag = model('Tag', tagSchema);

module.exports = Tag;
