const X = require('express');
const APP = X();

const PORT = 2626;

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);*/

APP.use('/project1',X.static(__dirname + '/site/'));
APP.use('/project2',X.static(__dirname + '/site2/'));
APP.listen(PORT, () => {
    console.log(`\r\nNode ::: I blablabla ${PORT}.\r\n`);
});