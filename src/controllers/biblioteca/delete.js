async function excluir(req, res, database, categoria) {
    await database.collection(categoria).doc(req.query.id).delete()
    const documento = await database.collection(categoria).doc(req.query.id).get()
    if (!documento.exists) {
        meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

        const now = new Date();

        res.status(200).json({
            mensagem: "Item excluido com sucessor!",
            categoria: categoria, 
            "horário": `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
            "data": `${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`
        })
    } else {
        res.send("Um erro ocorreu. ")

    }
}

async function deleta(req, res, database) {
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

module.exports = deleta