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

// connection.query('SELECT * FROM winterwords1', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
//   app.get('/sss', (req, res) => {
//     res.send(rows)
//   })

// });


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
      res.render('product_view', {
          results: results,
          stuff : stuff
      });
  });
}) 

// greek_ch2
app.get('/Greek_ch2', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch2', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch3
app.get('/Greek_ch3', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch3', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch4
app.get('/Greek_ch4', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch4', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch5
app.get('/Greek_ch5', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch5', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch6
app.get('/Greek_ch6', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch6', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch7
app.get('/Greek_ch7', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch7', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch8
app.get('/Greek_ch8', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch8', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch9
app.get('/Greek_ch9', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch9', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch10
app.get('/Greek_ch10', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch10', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch11
app.get('/Greek_ch11', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch11', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch12
app.get('/Greek_ch12', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch12', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch13
app.get('/Greek_ch13', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch4', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch14
app.get('/Greek_ch14', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch14', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch15
app.get('/Greek_ch15', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch15', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch16
app.get('/Greek_ch16', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch16', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch17
app.get('/Greek_ch17', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch17', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch18
app.get('/Greek_ch18', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch18', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch19
app.get('/Greek_ch19', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch19', {
          results: results,
          stuff : stuff
      });
  });
})



// greek_ch20
app.get('/Greek_ch20', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch20', {
          results: results,
          stuff : stuff
      });
  });
})

// greek_ch21
app.get('/Greek_ch21', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch21', {
          results: results,
          stuff : stuff
      });
  });
})


// greek_ch22
app.get('/Greek_ch22', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch22', {
          results: results,
          stuff : stuff
      });
  });
})


// greek_ch23
app.get('/Greek_ch23', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch23', {
          results: results,
          stuff : stuff
      });
  });
})


// greek_ch24
app.get('/Greek_ch24', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch24', {
          results: results,
          stuff : stuff
      });
  });
})


// greek_ch25
app.get('/Greek_ch25', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch25', {
          results: results,
          stuff : stuff
      });
  });
})


// greek_ch26
app.get('/Greek_ch26', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Greek_ch26', {
          results: results,
          stuff : stuff
      });
  });
})


// Hewbrew Words

// Hewbrew_ch2
app.get('/Hewbrew_ch2', function(req, res){
  let sql = "SELECT * FROM winterwords1";
  let query = connection.query(sql, (err, results) => {
      if (err) throw err;

      res.render('Hewbrew_ch2', {
          results: results,
          stuff : stuff
      });
  });
})




hbs.registerHelper('compare', function (v1, operator, v2, options) {
  'use strict';
  var operators = {
    '==': v1 == v2 ? true : false,
    '===': v1 === v2 ? true : false,
    '!=': v1 != v2 ? true : false,
    '!==': v1 !== v2 ? true : false,
    '>': v1 > v2 ? true : false,
    '>=': v1 >= v2 ? true : false,
    '<': v1 < v2 ? true : false,
    '<=': v1 <= v2 ? true : false,
    '||': v1 || v2 ? true : false,
    '&&': v1 && v2 ? true : false
  }
  if (operators.hasOwnProperty(operator)) {
    if (operators[operator]) {
      return options.fn(this);
    }
    return options.inverse(this);
  }
  return console.error('Error: Expression "' + operator + '" not found');
});

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


