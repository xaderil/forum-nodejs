var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var config = require("./config")
var makethem = require("./models/makethem")
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/thema1', function(req,res) {
  res.render('thema1')


})
app.get('/makethema', function(req,res) {
  res.render('makethema')
})
app.post('/makethema', function(req, res) {
  var {body} = req.body;
  makethem.create({
    body: body
  })
  res.redirect('/')
})

module.exports = app;
