const mysql = require('mysql')
var connection = ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_js_crud'
})

// const mysql = require('mysql'); 
// const connection = mysql.createConnection({ 
//     host: process.env.DB_HOST, 
//     user: process.env.DB_USER, 
//     password: process.env.DB_PASS, 
//     database: process.env.DB_NAME 
// });

var db;
function connectDb(){
    if(!db){
        db = mysql.createConnection(connection);
        db.connect(function(err){
            if (!err) {
                console.log("Database Connected Successful !!!");
                console.log(connection);
            } else {
                console.log('err', err)
                console.log("Database Connection Error !!!")
            }
        });
    }
    return db;
}

module.exports = connectDb();