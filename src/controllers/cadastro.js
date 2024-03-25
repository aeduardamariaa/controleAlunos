// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aluno');

// inserindo dados no banco de dados
module.exports = {
    async pagCadastroSalaGet(req, res) {
        res.render('../views/cadastroSala');
    },
    async pagCadastroAlunoGet(req, res){
        res.render('../views/cadastroAlunos')
    },
    async salaInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        });
        // Redirecionar para a página principal
        res.redirect('/');
    },
    async aluno(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/cadastroAluno', { salas });
    }
    // AWAIT só usa quando estamo usando uma função ASYNCS
}