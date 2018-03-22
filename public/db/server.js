var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./public/db/database.sqllite3');

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS Auth (info TEXT)");

    var stmt = db.prepare("INSERT INTO Auth VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM Auth", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();