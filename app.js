var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var config = require("./config")
var makethem = require("./models/makethem")
var post = require("./models/post")
var fs = require("fs")
var mongoose = require("mongoose")
var session = require("express-session")
var MongoStore = require('connect-mongo')(session);
var cookieParser = require("cookie-parser")
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));
app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  secret: config.session.secret,
  name: config.session.key,
  cookie: config.session.cookie,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  saveUninitialized: false,
  resave: false
}))

// app.use(function(req,res){
//   req.session.numberOfVisits = 1 + req.session.numberOfVisits || 1;
//   res.send("Visits:" + req.session.numberOfVisits);
// })
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/razdel1', function(req, res) {
  makethem.find({}).then(function(makethems) {
    res.render("razdel1", {
      makethems: makethems
    })
  })
})
app.get('/makethema', function(req, res) {
  res.render('makethema')
})
app.post('/makethema', function(req, res) {
  var {
    body
  } = req.body;
  var path = req.body.body;
  makethem.create({
    body: body
  })
  fs.readFile('./views/tema.ejs', "utf8", function read(err, data) {
    if (err) {
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
      var Post = mongoose.model(id, post)
      Post.find({}).then(function(doc) {
        res.render(id, {
          id: id,
          doc: doc
        })
      })
    }
  })
})
app.post('/razdel1/:id', function(req, res) {
  var a = req.body;
  var href1 = req.params.id
  var Post = mongoose.model(href1, post)

  if(a.user == "Ваше имя") {
    a.user = "Аноним"
  }
  Post.create(a).then(function() {
    Post.find({}).then(function(doc) {
      res.render(href1, {
        id: href1,
        doc: doc
      })
    })
  })
})
app.get("/login", function(req, res){
  res.render("login")
})

app.use(function (req, res) {
  res.render("404")
});



module.exports = app;
