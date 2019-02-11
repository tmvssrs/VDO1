const X = require('express');
const APP = X();

const PORT = 2820;

let http = require('http');

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(PORT);
*/

APP.use('/', X.static(__dirname + '/_SITE_/'));
APP.listen(PORT, () => {
    console.log(`\r\NODE ::: I started my back end server port ${PORT}.\r\n`);
});
