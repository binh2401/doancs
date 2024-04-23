var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: "1146",
    user: "root",
    password: "admin1234",
    database: "booksrore"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
con.end(function (err) {
    if (err) throw err;
    console.log("Closed!");
});