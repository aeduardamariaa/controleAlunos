// Importação
const Sequelize = require('sequelize');  //FAZ CONEXÃO COM O BANCO
const database = require('../config/db'); // CONEXAO COM O BANCO
// Criando a tabela Sala
const sala = database.define('Sala', { // DEFINE CRIA A TABELA 
    IDSala: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Capacidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
// Exportando essa tabela
module.exports = sala;