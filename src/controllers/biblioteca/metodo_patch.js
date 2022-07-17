
async function patch(req, res, database, categoria) {
    const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body

    const doc_atulizado = await database.collection(categoria).doc(req.params.id).update({
        "título": titulo,
        autor: autor,
        "artista(s)": artista,
        "gênero(s)": genero,
        "descrição": descricao,
        "ano de lançamento": Number(lancamento),
        status: status,

    })

    res.status(200).json(doc_atulizado)
}

async function metodoPatch(req, res, database){

    if (req.params.tipo.toLowerCase() === 'manga') {

        patch(req, res, database, "mangas")

    } else if (req.params.tipo.toLowerCase() === 'manhwa') {

        patch(req, res, database, "manhwa")

    } else if (req.params.tipo.toLowerCase() === 'novel') {
        patch(req, res, database, "novel")

    } else if (req.params.tipo.toLowerCase() === 'webcomic') {
        patch(req, res, database, "webcomic")
    }
}

export default metodoPatch