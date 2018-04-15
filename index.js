var express = require("express")
var app = express()
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.render('index', {someInfo: "Данные для передачи"});
});

app.listen(8080, function(){
  console.log("Server has been started")
})
