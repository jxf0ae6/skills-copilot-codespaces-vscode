// create web server
// 1. import http module
const http = require('http');
// 2. create server object
const server = http.createServer((req, res) => {
    // 3. create response
    res.write('Hello World');
    res.end();
});
// 4. listen to server
server.listen(3000);
console.log('Listening on port 3000...');
// 5. run server
// node comments.js
// open browser, enter localhost:3000
// you should see Hello World
// to stop server, press ctrl + c
// 6. run server in background
// node comments.js &
// to stop server
// killall node
// 7. run server in foreground
// fg
// to stop server
// ctrl + c