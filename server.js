var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();


var port = process.env.PORT || 3309;




app.use(express.static(process.cwd() + '/public')); 

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));  

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//***********Routes to Handlebars**********//



app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});


//*************************************************//

app.listen(port, function(){
  console.log('connected to', port);
});