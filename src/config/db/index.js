const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/the_x_files_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {}
}

module.exports = { connectDB };
