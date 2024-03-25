// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aluno');

// inserindo dados no banco de dados
module.exports = {
    async pagCadastroSalaGet(req, res) {
        res.render('../views/cadastroSala');
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


    async aluno(req, res) { // chamar no rota
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/cadastroAluno', { salas }); // nome do arquivo SALAS É um parametro
    },

    
    // AWAIT só usa quando estamo usando uma função ASYNCS
    async alunoInsert(req, res){
        // Recebendo as informações pelo Body
        const dados = req.body;
        // Nome padrão da foto
        let foto = 'usuario.jfif';
        // Criando aluno no banco de dados
        await aluno.create({
        Nome: dados.nome,
        Idade: dados.idade,
        Sexo: dados.sexo,
        IDSala: dados.sala,
        Foto: foto
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}