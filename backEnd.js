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

backEnd.get('/', (req, res) => res.send('Olá mundo'));

//backEnd.get('/contatos', (req, res) => res.send(["contato1","contato2"]));
backEnd.get('/contatos', (req, res) => res.send({
    nome: 'Caio',
    idade: 21,
    cidade: 'SP'
}));

backEnd.listen(3000, () => console.log('Servidor rodando na porta 3000'));


let produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
};
  
backEnd.post('/produto/criar', (req, res) => res.send(produto ={
      tipoProduto: "living",
      preco: 1245,
      quantidade: 300
}));


//perguntar pq não retorna o novo objt, e permaneço null no localhost

backEnd.get('/produto/criar', (req, res) => res.send(produto));
  
