const mysql = require('mysql2');
const dbInfo = {
    host     : 'localhost',
    user     : 'kangsky',
    password : '1234',
    database : 'testdb_ecukr_korean1'
};

// const mysql      = require('mysql2');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'kangsky',
//   password : '1234',
//   database : 'testdb_ecukr_korean1'
// });

// connection.connect();

// connection.query('SELECT * from table_0340am', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
//   app.get('/', (req, res) => {
//     res.send(rows)
//   })

// });
// connection.end();

// var dbConfig = require(__dirname + '/views/db.js');
// var conn = dbConfig.init();



module.exports = {
    init: function () {
        return mysql.createConnection(dbInfo);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql 연결 에러 : ' + err);
            else console.log('mysql 연결 성공');
        });
    },

    query: function(){
        mysql.createConnection(dbInfo).query('SELECT * from table_0340am', (error, rows, fields) => {
               if (error) throw error;
               console.log('User info is 222: ', rows);
               //app.get('/', (req, res) => {
               //  res.send(rows)
               })

    }
   
 

};