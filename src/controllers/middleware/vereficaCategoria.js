function categoriaDisponiveis(req, res, next) {
    const categoria = ["manga", "manhwa", "webcomic", "novel"]
    if (categoria.includes(req.params.tipo.toLowerCase())) {
        next()
    } else{
        res.status(404).send("Categoria não encontrada")
    }
}

module.exports = categoriaDisponiveis