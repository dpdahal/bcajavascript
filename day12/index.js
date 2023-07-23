let http = require('http');

let server = http.createServer((req, res) => {
    res.end('hello world');
});
server.listen(3000, () => {
    console.log('server is running at port 3000');
});