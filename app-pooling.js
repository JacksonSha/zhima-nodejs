var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'stangtang',
    port: 3306
});

var selectSQL ="show variables like 'wait_timeout'";

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    function query(){
        conn.query(selectSQL, function (err, res) {
            console.log(new Date());
            console.log(res);
            conn.release();
        });
    }
    query();
    setInterval(query, 5000);
});

/*var selectSQL = 'select 1';

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(selectSQL, function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
    });
});*/
