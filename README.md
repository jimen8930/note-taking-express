# Note-Taker-Express
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  This application was designed to give users a place to store notes to help them organize their thoughts and to keep track of tasks they need to complete. It is powered by Express and JavaScript and implements an imitation database using a json file (db.json) to save and retrieve data. This application connects the backend to the frontend through the use of GET, POST, and DELETE requests within Express which allows users to save, retrieve, post new data, and delete data from the application by use of the front end user interface (UI).

<img width="1066" alt="Screenshot 2023-06-29 at 9 55 45 PM" src="https://github.com/jimen8930/note-taking-express/assets/128547615/9750acc8-ccdb-4c49-b5b4-1a5c444cba87">

<img width="1081" alt="Screenshot 2023-06-29 at 10 00 15 PM" src="https://github.com/jimen8930/note-taking-express/assets/128547615/8b64f05c-325d-46a6-8af7-8fc841687f2c">

![image](https://github.com/jimen8930/note-taking-express/assets/128547615/ad70e9c7-2f52-417e-9e0d-1df74a016b06)



  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Clone the repo: git clone https://github.com/rmessett15/Note-Taker.git

Open in VS Code. If you do not have VS code you must install it.

Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install express and uniqid directly from the command line, to do so the command for express will be npm i express to install the latests version of Express framework globally so that it can be used within the node terminal, and npm i uniqid to install the latest version of uniqid).

To run the server, within the terminal, type the command npm start or node server.js.

Once the server is running, users can then access the front end of the application within the browser to observe full functionality of the site.

## Usage
This application is powered by Express meaning for it to function properly, there needs to be a server running in the background. To start the server, navigate to the directory of the application, install all dependencies (npm i), then type the command npm start (or node index.js). A message should then display in the command line saying "App listening at http://localhost:3001 🚀". Once the server is running, then navigate to the front end of the application directly from the command line by holding command and clicking the link http://localhost:3001. From there, users can pull up any existing notes saved to the database or create new notes, which once saved will be pushed to the database and persisted.
Here is step by step video tutorial.
https://youtu.be/M0wGV5X4Mu0

## License
https://opensource.org/licenses/MIT

This project is licensed under the MIT License.

## Contributing
Contributions to the README Generator are welcome! Here are the guidelines for this project. Fork the repository. Create a new branch for your contribution. Make your changes. Commit and push your changes to your forked repository. Submit a pull request, and provide a detailed description of your changes.

## Tests
There is currently no unit testing yet written for this application.
## Live URL deployed application 
https://note-taker-express23-82d2adb61c2c.herokuapp.com/

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [@jimen8930](https://github.com/jimen8930)
- Email: ejime053@gmail.com

