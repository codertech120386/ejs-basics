const mongoose = require('mongoose');

// step 1 :- create the schema for tags
const tagSchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true,
})

// step 2 :- connect the schema to the tags collection
module.exports = mongoose.model("tag", tagSchema)