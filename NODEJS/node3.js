const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method;
  console.log(`Received a ${method} request.`);
  res.end('Hello, World!');
});

server.listen(3030, () => {
  console.log('Server is listening on port 3000');
});
