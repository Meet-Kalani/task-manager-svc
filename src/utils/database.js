const mongoose = require('mongoose');
const logger = require('./logger');

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ysukvu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    logger.debug('MongoDB connection successful');
  } catch (err) {
    logger.error('MongoDB connection failed: ', err.message);
    process.exit(1);
  }
})();
