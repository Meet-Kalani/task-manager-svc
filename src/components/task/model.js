const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    status: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Status'
      }
    ],
    priority: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Priority'
      }
    ],

    due_date: {
      type: Date
    },
    assigned_to: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    created_by: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
      }
    ]
  },
  {
    timestamps: true
  }
);

const Task = model('Task', taskSchema);

module.exports = Task;
