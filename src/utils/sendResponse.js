const sendResponse = (res, statusCode, success, data) =>
  res.status(statusCode).json({
    success,
    data
  });

module.exports = sendResponse;
