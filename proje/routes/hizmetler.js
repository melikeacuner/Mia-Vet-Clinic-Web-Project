const { response } = require('express')
const express = require('express')
const router = express.Router()
const Hizmetlers = require('../models/Hizmetlers')
const { route } = require('./main')


router.get("/:id", (req, res) => {
 Hizmetlers.findById(req.params.id).lean().then((hizmetler) => {
         res.render("site/hizmet", { hizmetler:hizmetler});
         });
     });

module.exports = router