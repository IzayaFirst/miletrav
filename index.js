var express = require('express')
var path = require('path')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')

var app = express();
app.engine('handlebars' , exphbs())
app.set('view engine' , 'handlebars')
app.set('views', path.join(__dirname, './src/templete'))
app.use( bodyParser.json() );
app.use(express.static('./public'));
      // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('*' , function(req , res){
  res.render('index.handlebars');
})

app.listen(3000, function(){
  console.log("running at port 3000")
})
