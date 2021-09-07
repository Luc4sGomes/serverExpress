const express = require('express');
const homePageController = require('./controllers/homePageController');
const namePageController = require('./controllers/namePageController');
const telefonePageController = require('./controllers/telefonePageController');
const route = express.Router(); //instanciando para podermos criar nossas rotas

route.get('/',homePageController.controlaHomePage); //criando uma rota para a homepage. o 2 parametro chama a funcao do file homePageControlller 


route.get('/nome',namePageController.nameUser); //criando a rota para o meu nome

route.get('/telefone',telefonePageController.telefoneUser); //criando a rota para o meu telefone

module.exports = route; //exportando o modulo rotas
