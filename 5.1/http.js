const server = require('http').createServer();

server.on('request', (req, res) => {
  
  console.log('response recieved');
  
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');

  // setTimeout(function () {
  //   res.write('Another Hello world\n');
  // }, 10000);

  // setTimeout(function () {
  //   res.write('Yet Another Hello world\n');
  // }, 20000);
});

server.listen(8000);
