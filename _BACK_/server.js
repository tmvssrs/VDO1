const X = require('express');
const PORT = 1045;
const APP = X();

//var http = require('http');
//http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello Davy!');
//}).listen(port);

APP.use('/SITE', X.static(__dirname + '/Site/'));
APP.use('/P2', X.static(__dirname + '/P2/'));
APP.listen(PORT, () => {
    console.log(`/r/nNODE ::: I started my back end server on porter $(PORT)./r/n`);
});

const mysql = require('mysql');
let con = mysql.createConnection({
host: "localhost",
user: "root",
password: "mysql",
database: "grate_rating"
});

con.connect(function (err) {
if (err) throw err;
con.query("SELECT * FROM studenten",  (err, result, fields) =>{
if (err) {throw err;}
console.log("pre"+JSON.stringify(result)+"posters");
});
});