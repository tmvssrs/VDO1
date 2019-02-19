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
APP.use('/project4', X.static(__dirname + '/_TEMP_/'));

/* Data terugsturen, enkel als je een get call doet */
APP.get('/students',(req, res) => {res.send(["Filiberke","Jommeke"])});

APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
});

let output;
const mysql = require('mysql');
 let con = mysql.createConnection({
 	host: "localhost",
 	user: "root",
 	password: "mysql",
 	database: "grade_rating"
 });
 con.connect(function (err) {
 	if (err) throw err;
 	// con.query("select stu_voornaam, stu_naam, vak_naam, fou_minpunten from studenten s inner join stu_vak_fou stf on s.stu_id = stf.fk_stu_id inner join fouten f on stf.fk_fou_id = f.fou_id inner join vakken v on stf.fk_vak_id = v.vak_id group by stu_voornaam, stu_naam, vak_naam order by stu_naam;",  (err, result, fields) =>{
 	con.query("select * from studenten",  (err, result, fields) =>{
 		if (err) {throw err;}
        studentOutput = JSON.stringify(result);
        console.log(studentOutput);
 	});
 	con.query("select * from fouten",  (err, result, fields) =>{
 		if (err) {throw err;}
        mistakesOutput = JSON.stringify(result);
        console.log(mistakesOutput);
 	});
 	con.query("select * from vakken",  (err, result, fields) =>{
 		if (err) {throw err;}
        disciplinesOutput = JSON.stringify(result);
        console.log(disciplinesOutput);
 	});
 });

APP.get('/students', (req,res) => {res.send(studentOutput)});
APP.get('/mistakes', (req,res) => {res.send(mistakesOutput)});
APP.get('/disciplines', (req,res) => {res.send(disciplinesOutput)});
// APP.get('/vakken', (req,res) => {res.send(["HTML","CSS"])});
// APP.get('/fouten', (req,res) => {res.send(["Hoofdletter vergeten","; vergeten"])});

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

