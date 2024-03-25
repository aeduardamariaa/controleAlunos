const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = { // exporta o que ta dentro

    async pagInicialGet(req, res) {
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });
    
        const alunos = await aluno.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDAluno', 'Nome', 'Idade']
        });
        res.render('../views/index', { salas, alunos });

    }
    // async pagInicialDados(req, res) { // chamar no rota
    //     Encontrando todas as salas disponíveis no SQL
        
    //     const alunos = await aluno.findAll({
    //         raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
    //         attributes: ['IDAluno', 'Nome', 'Idade']
    //     });
    //     // Renderizando e passando o nome das salas para o front
    //     res.render('../views/cadastroAluno', { alunos }); // nome do arquivo SALAS É um parametro
    // }
}
// todo o codigo deve estas dentro do exports, senão ele não exporta