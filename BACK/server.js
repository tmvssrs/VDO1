const X = require('express');
const PORT = 1045;
const APP = X();

//var http = require('http');
//http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello Davy!');
//}).listen(port);

APP.use('/project1', X.static(__dirname + '/project1/'));
APP.use('/project2', X.static(__dirname + '/project2'));
APP.listen(PORT, () => {
    console.log(`/r/nNODE ::: I started my back end server on port $(PORT)./r/n`);
});