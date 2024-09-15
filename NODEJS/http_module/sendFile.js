const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {

  // Endpoint for file1
  if (req.url === '/file1') {
    const filePath = './file1.txt';  // Relative path to file1
    sendFile(filePath, res);

  // Endpoint for file2
  } else if (req.url === '/file2') {
    const filePath = './file2.txt';  // Relative path to file2
    sendFile(filePath, res);

  // Endpoint for file3
  } else if (req.url === '/file3') {
    const filePath = './file3.txt';  // Relative path to file3
    sendFile(filePath, res);

  // If no valid endpoint
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

// Helper function to send files
function sendFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error reading file');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    }
  });
}

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
