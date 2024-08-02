// app.js
const express = require("express")
const path = require('path')
var ejs = require('ejs');

const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');

const app = express();

//set views file
app.set('views', path.join(__dirname, 'views'));
//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set folder public as static folder for static file
app.use('/assets', express.static(__dirname + '/public'));


// serve files from the public directory
//app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('views'));

var fs = require('fs');

const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'cloudadmin1',
  password : '1234',
  database : 'TESTDB1'
});

connection.connect();

connection.query('SELECT * FROM winterwords1', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
  app.get('/sss', (req, res) => {
    res.send(rows)
  })

});


//connection.end();

// var dbConfig = require(__dirname + '/views/db.js');
// var conn = dbConfig.init();
// var query3 = dbConfig.query();

//dbConfig.connect2(conn);


app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get("/abd", (req, res) => {
//
      

});

app.get('/home', function(req, res){ 
  res.render('Home', { 
     array: ['One', 'Two', 'Three', 'Four'], 
     message: 'Greetings from geekforgeeks'
  }) 
}) 

let stuff = "True";

app.get('/product_view', function(req, res){ 


  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;
     // res.render('product_view', {
     //     results: results,
     //     stuff : stuff
     // });
  });
}) 

// app.get("/abd", (req, res) => {
//   //res.sendFile(path.join(__dirname, 'views/list.html'))
//   console.log("abd enter....")
//   fs.readFile('./views/list.html', 'utf8', function(error, data){
  
//     client.query('select * from products', function(error, results){
//       //응답
//       res.send(ejs.render(data, {
//         data: results
//       }));
  
//   });
  
  //   connection.query('select * from table_0340am', function(err, results){

  //     if (err) throw err;
  //     res.render('index', {data: result});
      
  //   });
//});


// //라우터 미들웨어 설정
// app.get('/abd', function(res, req){
//   //파일 읽기
//   fs.readFile('./views/list.html', 'utf8', function(error, data){
//     //데이터베이스 쿼리 실행
//     // connection.query('select * from testdb_ecukr_korean1', function(error, results){
//     //   //응답
//     //   // res.send(ejs.render(data, {
//     //   //   data: results
//     //   // }));
//     //   app.get('/abd', (req, res) => {
//     //     res.send(rows)
//     //   })
//     //   console.log("test abd...");
//     // });
// //     const mysql      = require('mysql2');
// // const connection = mysql.createConnection({
// //   host     : 'localhost',
// //   user     : 'kangsky',
// //   password : '1234',
// //   database : 'testdb_ecukr_korean1'
// // });
// //     connection.connect();
// //     connection.query('SELECT * from table_0340am', (error, rows, fields) => {
// //       if (error) throw error;
// //       console.log('User info3333 is: ', rows);

    
// //     });
  
//   });
//   res.send("aaa");
// });


 //connection.end();

// app.get('/abc', function(req, res){
//   //파일 읽기
//   console.log("abc enter....")
//   //res.sendFile(path.join(__dirname, 'views/list.html'))
//   fs.readFile('./views/list.html', 'utf8', function(error, data){
//     connection.query('select * from table_0340am', function(err, results){
//       //응답
//       // res.send(ejs.render(data, {
//       //   data: results
//       // }));
//       if (err) throw err;
//       res.render('index', {data: result});
      
//     });
  
//     /*
//   connection.query('select * from table_0340am', function(error, results){
//     //응답
//     res.send(ejs.render(data, {
//       data: id
//     }));
//   */ 

//   });
//   /*
//   fs.readFile('list.html', 'utf8', function(error, data){
//     //데이터베이스 쿼리 실행
//     client.query('select * from products', function(error, results){
//       //응답
//       response.send(ejs.render(data, {
//         data: results
//       }));
//     });
//   });

//   */
// });



app.listen(3000, () => {
  console.log('Listening on port ' + 3000);
});



// app.listen(52273, function(){
//   console.log('Server running at http://127.0.0.1:52273');
// });


