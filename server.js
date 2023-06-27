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

// Middleware function for the parsing of JSON data
app.use(express.json());
// Middleware function for the parsing of URL encoded data
app.use(express.urlencoded({extended: true}));
// Middleware function to serve static files
app.use(express.static("Develop/public"));

// Get route that sends back the index.html file
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);

// Get route that sends back the note.html file
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'Develop/public/note.html'))
);

// Get request 









// App.listen is used to spin up our local server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
