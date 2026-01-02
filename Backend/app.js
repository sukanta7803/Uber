const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./DB/db');
const userRoutes = require('./routes/userRoutes')
const captainRoutes = require('./routes/captainRoutes')
const cookieParser = require('cookie-parser')
connectToDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('hello World');
});
app.use('/users', userRoutes);
app.use('/captain', captainRoutes);
module.exports = app;