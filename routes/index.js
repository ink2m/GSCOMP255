var express = require('express');
var router = express.Router();
var connection = require('../config/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'GS Divition 527A, Residents information !' });
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

// edit request
router.get('/getUsers/:id', function(req, res) {
  const userID = req.params.id;

  if (!userID) {
    return res.status(400).json({ message: "User ID is required", status: 400 });
  }

  connection.query("SELECT * FROM tbl_node_crud WHERE user_id = ?", [userID], function (err, row) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error", status: 500 });
    } else {
      if (row.length > 0) {
        console.log("Selected ID is -> " + userID);
        res.json({ data: row[0], message: "Data load successful", status: 200 });
      } else {
        res.status(404).json({ message: "No record found for this ID", status: 404 });
      }
    }
  });
});




// delete request
router.post('/deleteData', function (req, res) {
  var userID = req.body.id;
  connection.query("DELETE FROM tbl_node_crud WHERE user_id = ? ", [userID], function (err, results) {
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
