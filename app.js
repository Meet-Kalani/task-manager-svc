require('dotenv').config();
const express = require('express');

const taskRoutes = require('./src/routes/task');
const db = require('./src/utils/database');

const app = express();
app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
