const { response } = require('express')
const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const { route, post } = require('./main')
const ObjectId = require('mongodb').ObjectID;
const mongo = require('mongodb');

router.get("/:id", (req, res) => {
  Post.findById(req.params._id).then((post) => {
    res.render("site/post", { post: post});
     });
 });

router.post('/test' , (req,res)=>{
  Post.create(req.body)
  res.redirect('/')
})


module.exports = router