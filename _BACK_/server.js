const X = require('express');
const APP = X();
const PORT = 1777;
let bodyParser = require('body-parser')
// let $ = require("jQuery");
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

APP.use('/project1', X.static(__dirname + '/_TEMP_/'));
APP.use('/project2', X.static(__dirname + '/_P2_/'));

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

const mysql = require('mysql');

let con2 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "mysql",
	database: "grade_rating"
});

function getDatabase(){
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
			outputstudenten = JSON.stringify(result);
		});
		con.query("select * from fouten",  (err, result, fields) =>{
		if (err) {throw err;}
			outputfouten = JSON.stringify(result);
		});
		con.query("select * from vakken",  (err, result, fields) =>{
		if (err) {throw err;}
			outputvakken = JSON.stringify(result);
		});
 });

 APP.get("/students", (req,res)=>{res.send([outputstudenten])});
 APP.get("/fouten", (req,res)=>{res.send([outputfouten])});
 APP.get("/vakken", (req,res)=>{res.send([outputvakken])});
}

getDatabase();



 var urlencodedParser = bodyParser.urlencoded({ extended: false });
 APP.post("/sql",urlencodedParser, (req, res) => { 
	if (req.method === 'POST') {
		// console.log(req.body) ;
		let result = req.body;
		// console.log(Object.keys(result));
		for (let key  in result){
			let txt = JSON.parse(key);
			for (let x in txt){
				if (x == "foutnaam"){
					txt = txt.foutnaam;
					console.log(txt);
					con2.connect(function(err) {
						res.end();
						if (err) throw err;
						console.log("Connected!");
						var sql = "INSERT INTO fouten (fou_omschrijving, fou_minpunten) VALUES ( '"+txt+"', '1')";
						console.log(sql);
						con2.query(sql, function (err, result) {
							  if (err) throw err;
							  else{
							let test = JSON.stringify(result);
							console.dir("1 record inserted" + test);
							getDatabase();
							// con2.close()
							  }
						});
					});
				}
				else if (x == "remove"){
					con2.connect(function(err) {
						res.end();
						if (err) throw err;
						console.log("Connected!");
						var sql = "DELETE FROM fouten ORDER BY fou_id desc limit 1";
						console.log(sql);
						con2.query(sql, function (err, result) {
							  if (err) throw err;
							  else{
							let test = JSON.stringify(result);
							console.dir("1 record deleted" + test);
							getDatabase();
							  }
						});
					});
				}
			}
			

		}
	}
});



//APP.get('/index', (req,res) => {res.send(output)});
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
