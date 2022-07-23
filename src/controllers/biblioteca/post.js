
async function post(req, res, database, colecao) {
    // const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body
    const {titulo, autor, ano_lancamento, genero, descricao, categoria, artista, status} = req.body
    const novo_documento = {
        "título": titulo,
        "autor": autor,
        "artista(s)": artista,
        "gênero(s)": genero,
        "descrição": descricao,
        "ano de lançamento": ano_lancamento,
        "status": status,
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

    if (categoria === "manga") {
        post(req, res, database, "mangas")
    } else if (categoria === "manhwa") {
        post(req, res, database,"manhwa" )
    } else if (categoria === "webcomic") {
        post(req, res, database, "webcomic")
    } else if (categoria === "novel") {
        post(req, res, database, "novel" )
    }
}

module.exports = create