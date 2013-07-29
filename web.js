var express = require('express');
var fs = require('fs');

var input_file = 'index.html';

var app = express.createServer(express.logger());

var readfile = function(input_file) {
    return fs.readFileSync(input_file).toString();

};

app.get('/', function(request, response) {
  response.send(readfile(input_file));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
