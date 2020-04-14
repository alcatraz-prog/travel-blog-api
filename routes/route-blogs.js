var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var userSchema = require('../models/user');
var blogSchema = require('../models/blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect("mongodb://127.0.0.1:27017/alcatraz-prog-travelBlog", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    getBlogs(req, res);
  });
});

async function getBlogs(req, res)
{
    const User = mongoose.models.User? mongoose.model('User') : mongoose.model('User', userSchema);
    const Blog = mongoose.models.Blog? mongoose.model('Blog') : mongoose.model('Blog', blogSchema);

    const blogs = await Blog.find()
        .populate('posted_by', 'display_name' ,User)
        .populate('likes.by', 'display_name' , User)
        .populate('comments.by', 'display_name' ,User)
        .catch(err=>{
            console.log(err);
        });
    res.send(blogs);
}


module.exports = router;