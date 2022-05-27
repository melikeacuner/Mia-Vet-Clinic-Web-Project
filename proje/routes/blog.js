const { response } = require('express')
const express = require('express')
const router = express.Router()
const Blogs = require('../models/Blogs')
const { route } = require('./main')
const ObjectId = require('mongodb').ObjectID;
const mongo = require('mongodb');
const path = require('path')


router.get("/:id", (req, res) => {
  Blogs.findById(req.params.id).lean().then((blog) => {
    res.render("site/blogpage", { blog: blog});
     });
 });

router.post('/test',(req,res)=>{

let post_image = req.files.post_image

  post_image.mv(path.resolve(__dirname, '../public/img/blogimages' , post_image.name))

   Blogs.create({
           ...req.body,
           post_image : `/public/img/blogimage/${post_image.name}` 
           
   })
 
   res.redirect('/users/admin') 
   
})
  


module.exports = router