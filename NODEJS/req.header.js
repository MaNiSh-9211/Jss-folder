const http = require('http');

const server = http.createServer((req, res) => {
  // Log the request headers
  console.log('Request Headers:', req.headers);//it prints an object names same as first perimeter in log fun

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Check the console for the request headers.');
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
