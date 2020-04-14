const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = Schema({
    title: String,
    image_actual_url: String,
    image_thumbnail_url: String,
    description: String,
    posted_by: {type: Schema.Types.ObjectId, ref: 'User'},
    posted_on: Date,
    likes: [{
        by: {type: Schema.Types.ObjectId, ref: 'User'}
    }],
    comments: [{
        by: {type: Schema.Types.ObjectId, ref: 'User'},
        comment: String,
        commented_on: Date
    }]
}
);

module.exports = blogSchema;