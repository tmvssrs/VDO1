const X = require('express');
const APP = X();

const HTTP = require('http');
const PORT = 1607;

/*HTTP.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(PORT);*/

APP.use('/project1', X.static(__dirname + '/project1/'));
APP.use('/project2', X.static(__dirname + '/project2/'));
APP.listen(PORT, () => {
   console.log(`\r\nNode ::: I started my back end server on port ${PORT}.\r\n`); 
});