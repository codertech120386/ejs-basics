const express = require("express");

const Comment = require("../models/comment.model")

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Comment)) 
router.get("", crudController.get(Comment))
router.get("/:id", crudController.getOne(Comment))
router.patch("/:id", crudController.updateOne(Comment))
router.delete("/:id", crudController.deleteOne(Comment));

module.exports = router;