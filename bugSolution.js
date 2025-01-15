const http = require('http');

const requestListener = async (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
});

//Use process.on to handle uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Add appropriate handling here (e.g., log, retry, graceful shutdown)
});

server.listen(8080);