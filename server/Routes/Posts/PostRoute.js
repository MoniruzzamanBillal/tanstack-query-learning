const express = require("express");
const router = express.Router();
const postsController = require("../../Controller/PostController");

// get all data
router.get("/posts", postsController.getPosts);

// get single data , based on id
router.get("/post/:id", postsController.getPost);

// add new data
router.post("/post/add", postsController.addData);

module.exports = router;
