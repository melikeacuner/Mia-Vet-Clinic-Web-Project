const exphbs = require('express-handlebars')
const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

mongoose.connect('mongodb://127.0.0.1/nodevet_db',{
  useNewUrlParser : true ,
  useUnifiedTopology : true 
})

app.use(fileUpload())


app.use(express.static('public'))

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const sorucevap = require('./routes/sorucevap')
const hizmetler = require('./routes/hizmetler')
const blog = require('./routes/blog')
const users = require('./routes/users')

app.use('/', main)
app.use('/hizmetler', hizmetler)
app.use('/sorucevap', sorucevap)
app.use('/blog', blog)
app.use('/users', users)

app.listen(port,hostname, () => {
  console.log(`server çalışıyor ,http://${hostname}:${port}/`)
})

