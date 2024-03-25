// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
route.get('/', home.pagInicialGet);


route.get('/CadastroSala', cadastro.pagCadastroSalaGet); //url
route.post('/CadastroSala', cadastro.salaInsert);  //form


route.get('/CadastroAluno', cadastro.aluno);
route.post('/CadastroAluno', cadastro.alunoInsert);

module.exports = route;