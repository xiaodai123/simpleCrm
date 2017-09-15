var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '10.4.122.20',
  port            : '8066',
  user            : 'crm',
  password        : 'crm',
  database        : 'crm'
});

module.exports = pool;