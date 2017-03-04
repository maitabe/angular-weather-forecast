var express = require('express');
var port = 8000;
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));


app.listen(port, function() {
	console.log('server running and healthy');
});