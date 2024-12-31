var express = require('express');
var router = express.Router();
var connection = require('../config/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sale! Sale! Sale!' });
});

// /getUsersData
router.get('/getUsersData', function (req, res, next) {
  connection.query('SELECT * FROM tbl_node_crud ORDER BY user_id ASC ', function (err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Internal Error !!!", status: 500 });
    } else {
      console.log(rows);
      res.json(rows); // Send rows as JSON
    }
  });
});


// create user
router.post('/saveFormData', function (req, res) {
  const userData = {
    fullName: req.body.txt_full_name,
    email: req.body.txt_email,
    contact: req.body.txt_contact,
    description: req.body.txt_description,
    isactive: 1,
  };
  console.log(userData);
  connection.query("INSERT INTO tbl_node_crud SET ?", userData, function (err, result) {
    if (err) {
      console.log(err);
      res.json({ message: "Internal Error !!!", status: 500 }); // Changed to res.json()
    } else {
      console.log('Record Successfully Save');
      console.log(userData);
      res.json({ message: "Record Created Successfully ...", status: 200 }); // Changed to res.json()
    }
  });
});

// delete request
router.post('/deleteData', function(req, res) {
  var userID = req.body.id;
  connection.query("DELETE FROM tbl_node_crud WHERE user_id = ? ", [userID], function(err, results) {
    if (err) {
      console.log(userID);
      console.log(err, 'Internal Error !!! Record cannot be deleted');
      res.json({ message: "Internal Error !!! Record cannot be deleted", status: 500 });
    } else {
      console.log("Deleted ID is: " + userID);
      console.log('Record deleted successfully..');
      res.json({ message: "Record deleted successfully..", status: 200 });
    }
  });
});

module.exports = router;
