module.exports = (err, req, res, next) => {
  console.log("🚀 ~ file: error.js:2 ~ err:", err);
  res.status(500).json({ message: err.message });
};
