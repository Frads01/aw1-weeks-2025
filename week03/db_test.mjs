import sqlite from 'sqlite3';

const db = new sqlite.Database("questions.sqlite", (err) => {
    if (err) throw err;
});

let result = [];

let sql = "SELECT * FROM answer";
db.all(sql, [], (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => {
        result.push(row);
    });

    console.log("**************");

    for (let r of result) {
        console.log(r);
    }
});

