var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database:'stangtang',
    port: 3306
});
conn.connect();
conn.query('select * from barticle limit 1;', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0]);
});
conn.end();
