const dotenv=require('dotenv');
 dotenv.config();
 const cors=require('cors');
 const express = require('express');
 const connectDB=require('./db/db');
 connectDB();
 const app = express();
 app.use(cors());
 app.get("/", (req, res) => {
    res.send("Hello World!");
    });
    module.exports = app ;