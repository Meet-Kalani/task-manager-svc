require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./src/components/task/route');
const userRoutes = require('./src/components/user/route');
const priorityRoutes = require('./src/components/priority/route');
const statusRoutes = require('./src/components/status/route');
const tagRoutes = require('./src/components/tag/route');
const db = require('./src/utils/database');
const errorHandler = require('./src/middlewares/errorHandler');
const logger = require('./src/utils/logger');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/task', taskRoutes);
app.use('/user', userRoutes);
app.use('/priority', priorityRoutes);
app.use('/status', statusRoutes);
app.use('/tag', tagRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'API endpoint not found', success: false });
});

app.use(errorHandler);

app.listen(3000, () => {
  logger.debug('Server is running on port 3000');
});
