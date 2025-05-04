require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/task');
const db = require('./src/utils/database');
const errorHandler = require('./src/middlewares/errorHandler');
const logger = require('./src/utils/logger');

const app = express();
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'API endpoint not found', success: false });
});

app.use(errorHandler);

app.listen(3000, () => {
  logger.debug('Server is running on port 3000');
});
