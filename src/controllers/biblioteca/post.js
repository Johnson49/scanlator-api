
async function post(req, res, database, colecao) {
    // const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body
    const {titulo, autor, ano_lancamento, genero, descricao, categoria, artista, status} = req.body
    const novo_documento = {
        "titulo": titulo,
        "autor": autor,
        "artista": artista,
        "genero": genero,
        "descricao": descricao,
        "lancamento": ano_lancamento,
        "status": status,
        "categoria": colecao
    }
    const doc = await database.collection(colecao).add(novo_documento)
    // meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

    // const now = new Date();
    // if (doc){
    //     res.status(201).json({
    //         mensagem: "Adicionado com sucesso.",
    //         categoria: categoria,
    //         "horário": `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    //         "data": `${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`
    //     })

        if(doc){
            res.status(201).redirect("/biblioteca/cadastro")
        }
      
    }


async function create(req, res, database, categoria) {

    if (categoria === "manga" || "mangá") {
        post(req, res, database, "manga")
    } else if (categoria === "manhwa") {
        post(req, res, database,"manhwa" )
    } else if (categoria === "webcomic") {
        post(req, res, database, "webcomic")
    } else if (categoria === "novel") {
        post(req, res, database, "novel" )
    }
}

module.exports = create