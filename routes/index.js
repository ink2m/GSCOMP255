var express = require('express');
var router = express.Router();
var connection = require ('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sale! Sale! Sale!' });
});

router.post('/saveFormData', function(req,res){
  const userData ={
    fullName : req.body.txt_full_name,
    email : req.body.txt_email,
    contact : req.body.txt_contact,
    description : req.body.txt_description,
    isactive : 1,
  };
  console.log(userData);
  connection.query("INSERT INTO tbl_node_crud SET? ", userData, function(err,result){
    if(err) {
      console.log(err, '{"message" : "Internal Error !!!", "status" : 500}');
      res.end('{"message" : "Internal Error !!!", "status" : 500}');
    }else {
      console.log('Record Successfully Save');
      console.log(userData);
      res.end('{"message" : "Record Created Successfully ...", "status" : 200}');
    }
  })

})
module.exports = router;
