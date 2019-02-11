//Lib express inladen
const X = require('express');
const APP = X();

//Eigen poort
const PORT = 1400;

APP.use('/', X.static(__dirname + '/_SITE_/'));

APP.get('/students', (req,res) => {res.send(["Jommeke","Filleberke"])});

APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
});