const X = require('express');
const APP = X();
const PORT = 5679;
// const PORT2 = 9999;
// const CORS = require('cors');
// const bodyParser = require('body-parser'); // needed?
// const path = require('path');
// const code = require('code.js');

// const HTTP = require('http');
// HTTP.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello Class!');
// }).listen(PORT);

APP.use('/', X.static(__dirname + '/_SITE_/'));
APP.use('/project2', X.static(__dirname + '/_P2_/'));

APP.get('/students', (req,res)=>{res.send([
  { id: 1, firstname: 'John', lastname: 'Doe'},
  { id: 2, firstname: 'Peter', lastname: 'Jefferson'},
  { id: 3, firstname: 'Amy', lastname: 'Winehouse'},
  { id: 4, firstname: 'Hannah', lastname: 'Montana'},
  { id: 5, firstname: 'Michael', lastname: 'Douglas'},
  { id: 6, firstname: 'Sandy', lastname: 'Bottoms'},
  { id: 7, firstname: 'Betty', lastname: 'Gretty'},
  { id: 8, firstname: 'Richard', lastname: 'Poor'},
  { id: 9, firstname: 'Susan', lastname: 'Boyle'},
  { id: 10, firstname: 'Vicky', lastname: 'Patterson'},
  { id: 11, firstname: 'Ben', lastname: 'Parker'},
  { id: 12, firstname: 'William', lastname: 'Richards'},
  { id: 13, firstname: 'Chuck', lastname: 'Wood'},
  { id: 14, firstname: 'Viola', lastname: 'Jefferson'}
]
)});

APP.get('/courses', (req,res)=>{res.send(["HTML","CSS","JavaScript","jQuery"])});

APP.get('/maxime', function(req, res){
  res.send('hello world');
});

APP.get('/', (req,res)=>{res.send(["HTML","CSS","JavaScript","jQuery"])});

APP.listen(PORT, () => {
  	console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
  });

// APP.all('/', CORS(), (req, res) => {
//   let t = Date();
//   res.send(
//     `${t} ::: checking for signs of life from version ${meta.model}`
//   );
// })
//
// APP.get('/generic/:arg', CORS(), (req, res) => {
//   res.send(
//     {antwoord:`you sent ${arg} as argument`}
//   );
// })

// const mysql = require('mysql');
// let con = mysql.createConnection({
// 	host: "localhost",
// 	user: "yourusername",
// 	password: "yourpassword",
// 	database: "mydb"
// });
// con.connect(function (err) {
// 	if (err) throw err;
// 	con.query("SELECT * FROM customers",  (err, result, fields) =>{
// 		if (err) {throw err;}
// 		console.log(result);
// 	});
// });

// let database  =  {
// 	"jan":{beroep:"dakwerker",hobby:"diepzeeknikkeren"},
// 	"piet":{beroep:"zeebonk",hobby:"langeafstandschminken"}
// };

// APP.options('/', CORS()) // enable pre-flight request // TODO: security -> curtail allowed origins
// APP.use(bodyParser.json());

// app.all('*', function(req, res, next) {
// 	console.log("entering cors");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });


// const WebSocket = require('ws');
//
// const ws = new WebSocket.Server({ port: 2345 });
//
// ws.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//     });
//     ws.send('something');
// });