const { response } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { route } = require('./main')
const Post = require('../models/Post')

router.get('/login', (req,res) => {
    res.render('site/login')
  })

  router.get('/admin', (req,res) => {
    res.render('site/admin')
  })

  router.post('/login', (req,res) => {
    const {email,password} = req.body
    User.findOne({email},(error,admin)=>{
           if(admin.password == password){
             res.redirect('/users/admin')
           }else{
             res.redirect('/')
           }
          })
       })

    

module.exports = router