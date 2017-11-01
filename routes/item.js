var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',//administrator
  password : '123456'
});

router.post('/count', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',' *');
		var aa=req.body.aa;
		connection.query("SELECT * FROM fenye.sousuo WHERE title LIKE '%"+aa+"%'", function(err, rows, fields) {
			res.send(rows);
		
		});
});
module.exports = router;
