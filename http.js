const http = require('http');

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/':
            response.end('main page');
            break;
        case '/about':
            response.end('about page');
            break;
        default:
            response.end('ERROR. 404 NOT FOUND');
    }
});

server.listen(5000);
