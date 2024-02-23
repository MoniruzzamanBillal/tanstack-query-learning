const { postModel } = require("../Model/PostsModel");

const postsController = {
  // get all posts
  async getPosts(req, res) {
    try {
      res.send({ message: "get all posts " });
    } catch (error) {
      res.send({ error });
    }
  },

  //
};

module.exports = postsController;
