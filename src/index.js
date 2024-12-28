import express from 'express';
import bodyParser from 'body-parser';
import "dotenv/config";

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log("Server is running on port " +PORT);
});
