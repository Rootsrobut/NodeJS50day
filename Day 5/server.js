const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to my server!</h1>');
  } else if (req.url === '/api/data') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = { message: 'Hello from server!' };
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});