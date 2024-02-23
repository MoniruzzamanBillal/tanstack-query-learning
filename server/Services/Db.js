const mongoose = require("mongoose");

const url = "mongodb://localhost:27017";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log("error in database ", error);
  }
};

module.exports = connectDb;
