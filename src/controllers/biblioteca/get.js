async function get(res, database, categoria) {
    const colecao = await database.collection(categoria).get()
    const lista = []

    colecao.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() })
    })
    // if (lista.length < 1) {
    //     return res.send("Categoria mangá está vazia. Após adicionar alguns titulos, eles apareceram aqui. ")
    // }
    // res.status(200).json(lista)
    return 
   
}

async function read(req, res, database) {

    if (req.params.tipo.toLowerCase() === 'manga') {
        return get(res, database, 'mangas')
    } else if (req.params.tipo.toLowerCase() === 'manhwa') {

        return get(res, database, 'manhwa')

    } else if (req.params.tipo.toLowerCase() === 'webcomic') {

        return get(res, database, 'webcomic')

    } else if (req.params.tipo.toLowerCase() === 'novel') {

       return get(res, database, 'novel')

    }
}

module.exports = read