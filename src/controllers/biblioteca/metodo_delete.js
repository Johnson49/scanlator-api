async function excluir(req, res, database, categoria) {

    await database.collection(categoria).doc(req.params.id).delete()
    const documento = await database.collection(categoria).doc(req.params.id).get()
    if (!documento.exists) {
        res.status(200).send("Item excluido com sucessor!")
    } else {
        res.send("Um erro ocorreu. ")
    }
}

async function metodoDelete(req, res, database) {
    if (req.params.tipo.toLowerCase() === 'manga') {
        excluir(req, res, database, "mangas")
    } else if (req.params.tipo.toLowerCase() === 'manhwa') {
        excluir(req, res, database, "manhwa")
    } else if (req.params.tipo.toLowerCase() === 'novel') {
        excluir(req, res, database, "novel")
    } else if (req.params.tipo.toLowerCase() === 'webcomic') {
        excluir(req, res, database, "webcomic")
    }
}

export default metodoDelete