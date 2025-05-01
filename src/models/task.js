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
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed', 'Archived'],
      default: 'Pending',
      required: true
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Extreme'],
      default: 'Low',
      required: true
    },
    due_date: {
      type: Date
    },
    assigned_to: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    tags: {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  },
  {
    timestamps: true
  }
);

const Task = model('Task', taskSchema);

module.exports = Task;
