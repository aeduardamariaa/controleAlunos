module.exports = {
    async pagInicialGet(req, res) {
        res.render('../views/index');
    }
}
// todo o codigo deve estas dentro do exports, senão ele não exporta