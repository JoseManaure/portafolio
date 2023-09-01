const express = require('express');
const { API_VERSION} = require('./constants');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();

// Import routings
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Configure static folder 
app.use(express.static("uploads"));


// Configure Header Http - Cors
app.use(cors());

// Configure routings 
// ...


module.exports = app;
