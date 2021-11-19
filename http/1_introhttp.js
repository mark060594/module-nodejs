const http = require('http');

const server = http.createServer((request, response) => {
    const metodo = request.method;
    console.log(metodo);

    const url = request.url;
    console.log(url);

    // le definimos un todo el header, con writeHead
    // response.writeHead(200, {})
    response.writeHead(200, 'text/plain');

    if (metodo == 'GET' && url == '/koder') {
        response.write('Aquí estan todos los koders');
        console.log('Aquí estan todos los koders');
    } else if (metodo == 'POST' && url == '/koder') {
        response.write('Aquí puedes crear koders');
        console.log('Aquí puedes crear koders');
    } else {
        response.end('No se que hacer, auida');
        console.log('No se que hacer, aiuda');
    }

    response.end();

});

server.listen(8081, () => {
    console.log('El servidor arranco en el puerto 8081');
});