const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.ysukvu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (err) {
    console.log('MongoDB connection failed: ', err.message);
  }
})();
