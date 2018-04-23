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
app.get('/razdel1', function(req, res){
  makethem.find({}).then(function(makethems){
    res.render("razdel1", {makethems:makethems})
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

  fs.readFile('./views/tema.ejs', "utf8", function read(err, data){
  if(err){
    throw err;
  }
  var path1 = "./views/" + path + ".ejs"
  fs.appendFile(path1, data)
  res.redirect('/razdel1')
  })
})
app.get('/razdel1/:id', function(req, res) {
  var id = req.params.id
  makethem.find({
      body: id
    })
    .then(function(doc) {
      var p = doc.length
      console.log(p);
      if (p == 0) {
        res.send("Запрашиваемая тема не найдена")
      } else {

        res.render(id, {id : id})
      }
    })
})
app.post('/razdel1/:id', function(req,res){

})


module.exports = app;
