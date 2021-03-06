<h1>MLDB - Movie Library Database</h1>

MLDB is a web application where anyone can search for movies based on their preferences, and also purchase tickets to watch them in the Movie Theater.

This repository contains the client and server sides of the web application.

In order to run the application, make sure to previous install node.js in your machine.

Then, follow these steps:

1.  Clone the entire repository
2.  Go to the client directory

         - Install all dependencies by running "npm install" command in the terminal.
         - Start the client side by running "npm start" command in the terminal.
         - The app will open in the development mode.

         Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
         The page will reload if you make edits.\
         You will also see any lint errors in the console.

3.  Go to the server directory

         - Install all dependencies by running "npm install" command in the terminal.
         - Start the server side by running "npm run startDev" command in the terminal.

         The server will run on [http://localhost:3001](http://localhost:3001).
         The server uses MySQL database. In order to use it, install MySQL, login with your credentials and then run the SQL_Statements.sql file to create the Schema and all the necessary tables to use the application.
         Then, in the file server.js, enter your credentials where it's asked to.

MLDB is built using the following technologies:

- Front-end: JavaScript (ReactJS), HTML, CSS
- Back-end: NodeJS, ExpressJS, Knex
- Database: MySQL

# Hosting
The front-end is hosted at Netlify [https://meek-kashata-a70a6e.netlify.app/] (https://meek-kashata-a70a6e.netlify.app/)

The back-end is hosted at Heroku [https://fasal-app-ramdev.herokuapp.com/] (https://fasal-app-ramdev.herokuapp.com/users)

The database is up and running on an EC2 instance

```
connection: {
    host : '13.233.91.196',          // hostname
    port : 3306,                    // port
    user : 'fasal',                // username
    password : 'password',        // password
    database : 'mldb'            // database name
  }
```

