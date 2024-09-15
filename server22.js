const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      res.end(data); // This line sends the file content
    });
  } else {
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
