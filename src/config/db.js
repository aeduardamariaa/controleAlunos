const sequelize = require('sequelize');
//configurações da base de dados       db            user              password
const database = new sequelize('controleAlunos', 'controleAlunos', 'ets@bosch207',
    {
        dialect: 'mssql', host: 'localhost', port: 54158
    }); //banco, usuario, senha
database.sync();
module.exports = database; 

// sequelize faz a conexão com o banco usando ORM