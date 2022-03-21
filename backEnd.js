//Primeira parter - Projeto integrador

//console.log('Hello muychaxos')

const http = require('http');
const express = require('express');
const backEnd = express();


//http.createServer((req, res) => {
//    res.writeHead(200, { 'Content-Type': 'text/plain'})
    //res.end("Meu primeiro servidor")
//    switch(req.url) {
//        case "/":
//            res.end("Você está na Home Page!")
//            break
//        case "/contato":
//            res.end("Você está na página de contato")
//           break
//        default:
//            res.end("Você está em nosso servidor!")
//           break
//    }
//}).listen(3000, () => console.log('Servidor reodando na porta 3000'));

//let backEnd = express()

//console.log(backEnd);

//perguntar sobre o 2 parametro:

//backEnd.listen(3000, 'localhost', () => {
//    console.log('O servidor está rodando')
//})

//routing_response

backEnd.get('/', (req, res) => res.send('Olá mundo'))
backEnd.listen(3000, () => console.log('Servidor rodando na porta 3000'))