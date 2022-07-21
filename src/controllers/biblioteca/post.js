
async function post(req, res, database, categoria) {
    const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body
    const novo_documento = {
        "título": titulo,
        "autor": autor,
        "artista(s)": artista,
        "gênero(s)": genero,
        "descrição": descricao,
        "ano de lançamento": Number(lancamento),
        "status": status,
    }
    const doc = await database.collection(categoria).add(novo_documento)
    meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

    const now = new Date();
    if (doc){
        res.status(201).json({
            mensagem: "Adicionado com sucesso.",
            categoria: categoria,
            "horário": `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
            "data": `${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`
        })
    }
}

async function create(req, res, database) {

    if (req.params.tipo.toLowerCase() === "manga") {
        post(req, res, database, "mangas")
    } else if (req.params.tipo.toLowerCase() === "manhwa") {
        post(req, res, database, "manhwa")
    } else if (req.params.tipo.toLowerCase() === "webcomic") {
        post(req, res, database, "webcomic")
    } else if (req.params.tipo.toLowerCase() === "novel") {
        post(req, res, database, "novel")
    }
}

module.exports = create