var express = require('express');
var morgan = require('morgan');
var app = express();

var port = 8080;

app.use(morgan('dev'));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/demo.html');
});
app.listen(port);

console.log('listening on '+port);