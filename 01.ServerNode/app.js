//Importa o módulo HTTP (CommonJS)

// const http = require('http');

//Importa o módulo HTTP (ES Module)

import http from 'http';

//Dados do servidor
const hostname = 'localhost'; //127.0.0.1
const port = 3000;

//Criar o servidor
const server = http.createServer((request, response) => {
    response.statusCode = 200; //ok
    // response.setHeader('Content-Type','text/plain'); 
    response.setHeader('Content-Type', 'text/html');
    response.end('<h3> Server em node.js! Funcionando com Nodemon </h3>');
});

server.listen(port, hostname, () => {
    // console.log(`Servidor iniciado, rodando em http://localhost:3000`);
    console.log(`Servidor iniciado, rodando em http://${hostname}:${port}`);
        
});

// ES Module
// package.json {}
// Nodemon