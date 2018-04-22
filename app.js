var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var config = require("./config")
var makethem = require("./models/makethem")
var fs = require("fs")

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', function(req, res) {
  res.render('index');
});
app.get('/thema1', function(req, res){
  makethem.find({}).then(function(makethems){
    res.render("thema1", {makethems:makethems})
  })
})
app.get('/makethema', function(req,res) {
  res.render('makethema')
})
app.post('/makethema', function(req, res) {
  var {body} = req.body;
  var path = req.body.body;
  makethem.create({
    body: body
  })
  var path1 = "./views/" + path + ".html"
  fs.appendFile(path1,"1234")
  res.redirect('/thema1')
})

module.exports = app;
