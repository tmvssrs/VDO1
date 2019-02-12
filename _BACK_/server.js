const X = require('express');
const PORT = 1045;
const APP = X();
let output;

//var http = require('http');
//http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello Davy!');
//}).listen(port);

APP.use('/SITE', X.static(__dirname + '/_SITE_/'));
APP.use('/P2', X.static(__dirname + '/_P2_/'));
APP.listen(PORT, () => {
    console.log(`/r/nNODE ::: I started my back-end server on porter $(PORT)./r/n`);
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

con.query("select stu_voornaam, stu_naam, vak_naam, fou_minpunten from studenten s inner join stu_vak_fou stf on s.stu_id = stf.fk_stu_id inner join fouten f on stf.fk_fou_id = f.fou_id inner join vakken v on stf.fk_vak_id = v.vak_id group by stu_voornaam, stu_naam, vak_naam order by stu_naam;",  (err, result, fields) =>{
if (err) {throw err;}

//queri string voor frontend
let output = JSON.stringify(result);
console.log(output);

});
});