const http = require('http');

const server = http.createServer((req, res) => {
  // Log the request method
  console.log('Request Method:', req.method);

  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Check the console for the request method.');
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
