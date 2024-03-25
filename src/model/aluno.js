const Sequelize = require('sequelize');  //FAZ CONEXÃO COM O BANCO
const database = require('../config/db'); // CONEXAO COM O BANCO
const sala = require('./sala');
// Criando a tabela Sala
const aluno = database.define('Aluno', { // DEFINE CRIA A TABELA 
    IDAluno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Sexo: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Foto: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

//foreign key
aluno.belongsTo(sala, {
    constraint: true, //garante integridade referencial
    foreignKey: 'IDSala'
});
// Exportando essa tabela
module.exports = aluno;