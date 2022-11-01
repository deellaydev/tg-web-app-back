const http = require('http')

http.createServer((req, res) => {
    console.log('Server is working');
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.end('gooo')
}).listen(3001)