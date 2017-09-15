var express = require('express');
var conn = require('./mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function (req,res) {
  console.log(req.body);
  const param = {
    custName:req.body.custName,
    email:req.body.email,
    password:req.body.password
  }
  conn.query('insert into cust_test set ?',param,function (err,result) {
    if(err) throw err;
    res.render('error',{message:result.serverStatus})
  })
})
module.exports = router;
