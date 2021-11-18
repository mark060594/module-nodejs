const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {})
    response.write('Hello World!');
    response.end();
})

server.listen(8081, () => {
    console.log('El servidor arranco en el puerto 8080');
});