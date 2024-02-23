const express = require("express");
const router = express.Router();
const postsController = require("../../Controller/PostController");

router.get("/posts", postsController.getPosts);

module.exports = router;
