/*const http = require('http');*/

/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(PORT);*/

const X = require('express');
const APP = X();
const PORT = 5588;

/* statische verwijzing */
APP.use('/project1', X.static(__dirname + '/_SITE_/'));
APP.use('/project2', X.static(__dirname + '/_P2_/'));

APP.use('/project3', X.static(__dirname + '/_P3_/'));
APP.get('/students',(req, res) => {res.send(["Filiberke","Jommeke"])});

APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
});