console.log("ch2");




const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'cloudadmin1',
  password : '1234',
  database : 'TESTDB1'
});

connection.connect();

connection.query('SELECT * from winterwords1', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
  app.get('/', (req, res) => {
    res.send(rows)
  })

});




connection.end();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

