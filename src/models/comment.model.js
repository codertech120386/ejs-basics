const mongoose = require('mongoose');

// step 1 :- create the schema for comments
const commentSchema = new mongoose.Schema({
    body: {type: String, required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: "post", required: true}
}, {
    versionKey: false,
    timestamps: true
})

// step 2 :- connect the schema to the comments collection
module.exports = mongoose.model("comment", commentSchema)