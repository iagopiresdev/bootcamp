//create a documentation of all steps

/**
 * npm init -y
 * npm install express
 * npm install nodemon --save-dev
 * run nodemon app.js on terminal
 */

const express = require('express');
const app = express();
const PORT = 3000;

/**
 * POST => Insert data
 * GET => Get data 
 * PUT => Update data
 * DELETE => Delete data
 */

/**
 * Body => to send data to the server
 * Params => to send data to the server through the URL
 * Query => to send data to the server through the URL id (optional)
 */

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/secret', (req, res) => {;
    res.send('This is a hiper secret page!');
    }
);

app.use((req, res) => {
    res.statusCode = 404;
    res.end('404 - Page not found');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);
