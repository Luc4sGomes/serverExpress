const express = require('express') //pegando meu modulo express para criação de servidores
const route = require('./routes');

const app = new express();

app.use(route); //fizendo para o express que vamos utilizar o route que sao as rotas do meu file routes.js

app.listen(8080, () => console.log('server is running ! :)')); // estamos dizendo para o meu servidor executar na porta 8080 no meu local host