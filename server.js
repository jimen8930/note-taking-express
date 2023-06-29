// To import express
const express = require('express');
// To import the path 
const path = require('path');
// To import file system module
const fs = require("fs");
// To import unique id module to generate new id
const uuid = require("uuid");

const noteData =require("./Develop/db/db.json");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware function for the parsing of JSON data
app.use(express.json());
// Middleware function for the parsing of URL encoded data
app.use(express.urlencoded({extended: true}));
// Middleware function to serve static files
app.use(express.static("Develop/public"));

// Get route that sends back the note.html file
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
);

// Get route that sends back the index.html file
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);

// Get route request for api/notes and send backs as parsed json
  app.get('/api/notes', (req, res) => {
    fs.readFile('./Develop/db/db.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parseData = JSON.parse(data);
        res.status(200).json(parseData);
      }
  });
});

  app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
      const newNote = {
        title: title,
        text: text,
        id: uuid(),
      };
      fs.readFile('./Develop/db/db.json', 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parseData = JSON.parse(data);
          parseData.push(newNote);

          fs.writeFile('./Develop/db/db.json', JSON.stringify(parseData, null, 4), 
      (writeErr) => 
      writeErr
        ? console.error(writeErr)
        : console.info("Succesfully updated data")
      );

      }
      });

      const response = {
        status: 'success',
        body: newNote
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting data');
    }
   });
   

// App.listen is used to spin up our local server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
