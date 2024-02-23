const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
});

const postModel = new mongoose.model("post", postsSchema);

module.exports = { postModel };
