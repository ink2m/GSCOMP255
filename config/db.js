const mysql = require('mysql')
var connection = ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_js_crud'

})
var db;
function connectDb(){
    if(!db){
        db = mysql.createConnection(connection);
        db.connect(function(err){
            if (!err) {
                console.log("Database Connected Successful !!!");
                console.log(connection);
            } else {
                console.log("Database Connection Error !!!")
            }
        });
    }
    return db;
}

module.exports = connectDb();