var express = require('express');
var router = express.Router();
var Mysql = require('./mysql')


/* GET home page. */
router.get('/shouye', function (req, res, next) {
  console.log(req);
  Mysql.sql({
    sql: 'select * from four_sytitle',
    data(data) {
        console.log(data)
        res.send(data)
    }
  })
});

module.exports = router;
