// Step 1: Import the express module
const express = require('express');

// Step 2: Initialize an instance of express
const app = express();

// Step 3: Define a port for the server to listen on
const port = 3000;

// Step 4: Create a route handler for the root path ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Step 5: Start the server and make it listen on the defined port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});