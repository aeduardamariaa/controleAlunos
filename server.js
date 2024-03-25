const express = require('express'); //baixado, por isso só referenciar o nome
const routes = require('./routes'); //importando um arquivo do mesmo lugar (criado por mim)
const db = require('./src/config/db');

const app = express(); // inicializa a biblioteca

app.use(express.urlencoded({ extended: true }));
// Static files
app.use(express.static('public')); // considera que estou dentro da pasta, até mesmo quando não estou
// EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);
app.listen(3000, () => console.log('Acesse: http://localhost:3000/'));