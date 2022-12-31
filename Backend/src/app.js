const express = require('express');
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const {config} = require('dotenv')
var bodyParser = require('body-parser');

const cors = require('cors');
//D:\assignment_2\Rozerpay\Backend\src\config\config.env
config({ path: './config/config.env' });
console.log("app")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()) 

app.use('/api', routes)

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key:  'rzp_test_68hOhyCY6693ZV'})
);

module.exports.app = app

