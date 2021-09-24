const express = require("express");

const connect = require("./configs/db")

const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const commentController = require("./controllers/comment.controller");
const tagController = require("./controllers/tag.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);
app.use("/tags", tagController);

app.listen(2345, async function () {
    await connect();
    console.log("listening on port 2345");
});