const http = require('http');

const server = http.createServer((req, res) => {
  // Log the request URL
  console.log('Request URL:', req.url);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("chut mar dunga");
  res.end(' Check the console for the request URL.');
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
