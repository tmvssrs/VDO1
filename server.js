const X = require('express');
const APP = X();
const PORT = 1288;
const http = require('http');



//http.createServer(function (req, res) {
//	console.log("server started");
  //  res.writeHead(200, {'Content-Type': 'text/plain'});
   // res.end('Hello Bart!');
//}).listen(PORT);

APP.use('/project1', X.static(__dirname + '/project 1/'));
APP.use('/project2', X.static(__dirname + '/project 2/'));
APP.listen(PORT, () => {
	console.log(`\r\nNODE ::: I started my back end server on port $(PORT).\r\n`);
});

