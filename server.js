// To import express
const express = require('express');
// To import the path 
const path = require('path');
// To import file system module
const fs = require("fs");
// To import unique id module to generate new id
const uuid = require("uuid");

const notesDb =require("./Develop/db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for the parsing of JSON data
app.use(express.json());
// Middleware for the parsing of URL encoded data
app.use(express.urlencoded({extended: true}));
// Middleware function to serve static files
app.use(express.static("Develop/public"));










app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });