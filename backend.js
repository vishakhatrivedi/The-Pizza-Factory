import express from 'express';
import cors from 'cors';
//const bodyParser = require('body-parser');
import { createConnection } from 'mysql';
// create express app
const app = express();
// Setup server port
const port = 4000;
// const port1= 4001;
const conn = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'feedback1',
    port    :   3306
  });
  conn.connect(function(err) {
    if (err) {
    throw err;
    }
    console.log("Database Connected!");
  });

  // CORS is enabled for all origins
app.use(cors());



app.use(express.json()); //to accept data in json format 
// app.use(express.urlencoded()); //to decode data sent through html form
// app.use(express.static('public'));

  app.post('/feedback1.pizzafac', (req, res) => {
    console.log("HEllo",req.body)
    var sql= `insert into feedback1.pizzafac(name, email, message) values ("${req.body.name}","${req.body.email}","${req.body.message}")`;
    conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });


  app.get('/feedback1.pizzafac', (req, res) => {
    var sql= "SELECT * FROM pizzafac";
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });

  // listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});