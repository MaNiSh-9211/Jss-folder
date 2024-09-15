const express = require('express');
const http = require('http');

const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route for the root URL
app.get('/', async (req, res) => {
  try {
    // Create a new HTTP request to the API
    const request = http.request('https://api.example.com/cars', (response) => {
      let data = '';

      // Append the data chunks to the 'data' variable
      response.on('data', (chunk) => {
        data += chunk;
      });

      // When the response ends, parse the JSON data and render the EJS template
      response.on('end', () => {
        const cars = JSON.parse(data);
        res.render('p1', { cars });
      });
    });

    // Handle any errors that occur during the request
    request.on('error', (error) => {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    });

    // End the request
    request.end();
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

// Define a route for the p1 file
app.get('/p1', (req, res) => {
  res.sendFile(__dirname + '/p1.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
