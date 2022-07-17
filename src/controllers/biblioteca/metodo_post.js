
async function post(req, res, database, categoria) {
    const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body
    const novo_documento = {
        "título": titulo,
        autor: autor,
        "artista(s)": artista,
        "gênero(s)": genero,
        "descrição": descricao,
        "ano de lançamento": Number(lancamento),
        status: status,
    }
    const doc = await database.collection(categoria).add(novo_documento)
    res.status(201).json(doc)
}

async function metodoPost(req, res, database) {

    if (req.params.tipo.toLowerCase() === 'manga') {
        post(req, res, database, "mangas")
    } else if (req.params.tipo.toLowerCase() === 'manhwa') {
        post(req, res, database, "manhwa")
    } else if (req.params.tipo.toLowerCase() === 'webcomic') {
        post(req, res, database, "webcomic")
    } else if (req.params.tipo.toLowerCase() === 'novel') {
        post(req, res, database, "novel")
    }
}

export default metodoPost