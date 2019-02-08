//var http = require('http');
const X = require('express');
const APP = X();

const HTTP = require('http');
const PORT = 1997;

//HTTP.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.end('Hello World!');
//}).listen(1999);

APP.use('/',X.static(__dirname + '/_SITE_/'));

APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my back end server port ${PORT}.\r\n`);
})