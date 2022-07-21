
async function patch(req, res, database, categoria) {
    const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body

    const doc_atulizado = await database.collection(categoria).doc(req.query.id).update({
        "título": titulo,
        "autor": autor,
        "artista(s)": artista,
        "gênero(s)": genero,
        "descrição": descricao,
        "ano de lançamento": Number(lancamento),
        "status": status,

    })
    if (doc_atulizado){
        meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
        const now = new Date();
        res.status(200).json({
            mensagem: "Item atualizado com sucessor!",
            categoria: categoria, 
            "horário": `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
            "data": `${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`
        })
    }
}

async function update(req, res, database) {

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

module.exports = update