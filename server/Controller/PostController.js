const { postModel } = require("../Model/PostsModel");

const postsController = {
  // get all posts
  async getPosts(req, res) {
    try {
      const response = await postModel.find();
      res.send({ data: response });
    } catch (error) {
      res.send({ error });
    }
  },

  // get single post data
  async getPost(req, res) {
    try {
      const id = req.params.id;
      const query = { _id: id };
      const responseData = await postModel.find(query);

      res.send({ data: responseData });
    } catch (error) {
      res.send({ error });
    }
  },

  // add data in database
  async addData(req, res) {
    try {
      const { title } = req.body;

      const data = {
        id: Math.random() * 10,
        title,
      };

      // console.log("data in add data method = ", data);
      const postData = new postModel(data);

      const response = await postData.save();

      res.send(response);
      // res.send({ message: "add new posts " });
    } catch (error) {
      res.send({ error });
    }
  },

  //
};

module.exports = postsController;
