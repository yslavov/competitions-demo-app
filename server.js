var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app'));
app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res){
  res.render('index');
});

app.listen(port);
console.log('Server listening on port', port);