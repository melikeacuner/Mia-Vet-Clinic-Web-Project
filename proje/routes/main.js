const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const Post = require('../models/Post')
const Hizmetlers = require('../models/Hizmetlers')
const Blogs = require('../models/Blogs')

router.get('/', (req,res) => {
    res.render('site/index')
})

router.get('/iletisim', (req,res) => {
  res.render('site/iletisim')
})

   //hizmetler sayfasına yönlendirdiği kısım
router.get('/hizmetler', (req,res) => {
 Hizmetlers.find({}).lean()
 .then(hizmetler => { 
   res.render('site/hizmetler' ,{hizmetler : hizmetler})
 })
})

router.get('/blog', (req,res) => {
  Blogs.find({}).lean()
  .then(blog => { 
    res.render('site/blog' ,{blog : blog})
  })
})

router.get('/about', (req,res) => {
  res.render('site/about')
})

router.get('/sorucevap', (req,res) => {
 Post.find({}).lean()
  .then(sorucevap => { 
    res.render('site/sorucevap' ,{sorucevap : sorucevap})
  })
})


module.exports = router