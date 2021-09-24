const express = require("express");

const Post = require("../models/post.model")
const Comment = require("../models/comment.model");

const crudController = require("./crud.controller");

const router = express.Router();


router.post("", crudController.post(Post));

// getting all posts
router.get("/posts", async (req, res) => {
    const posts = await Post.find().populate({
        path:'author',
        select:'first_name'
   }).populate("tags").lean().exec();

    return res.status(200).send({posts})
})

router.get("/:id", crudController.getOne(Post, 'posts/post.ejs'))
router.patch("/:id", crudController.updateOne(Post))
router.delete("/:id", crudController.deleteOne(Post))

// get all comments for a post
router.get("/:id/comments", async (req, res) => {
    const comments = await Comment.find({post: req.params.id}).lean().exec();
    const post = await Post.findById(req.params.id);

    return res.status(200).send({comments, post});
})

module.exports = router;