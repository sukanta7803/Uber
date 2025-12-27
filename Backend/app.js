const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./DB/db');

connectToDB();
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello World');
});
module.exports = app;