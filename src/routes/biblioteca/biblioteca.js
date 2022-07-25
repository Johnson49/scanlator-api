const express = require('express')
const router = express.Router()
const database = require("../../database/config/config")
const vereficaCategoria = require("../../controllers/middleware/vereficaCategoria")


router.get("/biblioteca/cadastrar", (req, res) => {
    res.render('cadastro', { titulo: "Cadastro" })
})

router.post("/biblioteca/editar-informacoes", async (req, res) => {
  
    const {id, categoria} = req.body

        const documento = await database.collection(categoria).doc(id).get()
        if(documento.exists){
            res.render("editar", {error: false, id: documento.id, item: documento.data()})
        } else{
            res.render("editar", {error: true})
        }
})

router.post("/biblioteca/detalhamento", async (req, res) => {

    const {id, categoria} = req.body

        const documento = await database.collection(categoria).doc(id).get()
        if(documento.exists){
            res.render("info_completo", {error: false, id: documento.id, item: documento.data()})
        } else{
            res.render("info_completo", {error: true})
        }
})

router.post("/biblioteca/adicionar", (req, res) => {
    const categoria = req.body.categoria.toLocaleLowerCase()
    try {
        create(req, res, database, categoria)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})
router.post("/biblioteca/atualizar", async (req, res) => {
    const categoria = req.body.categoria.toLocaleLowerCase()
    try {
        const { id, titulo, genero, ano_lancamento, status,categoria, autor, descricao, artista } = req.body

    const doc_atulizado = await database.collection(categoria).doc(id).update({
        "titulo": titulo,
        "autor": autor,
        "artista": artista,
        "genero": genero,
        "descricao": descricao,
        "lancamento": ano_lancamento,
        "status": status,
        "categoria": categoria
    })

        if(doc_atulizado){
            res.redirect(`/biblioteca/${categoria}`)
        }

    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.post('/biblioteca/deletar', async (req, res) => {
    try {
        const {id, categoria} = req.body
        await database.collection(categoria).doc(id).delete()
        const documento = await database.collection(categoria).doc(id).get()
        if(!documento.exists){
            res.redirect(`/biblioteca/${categoria}`)
        }
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.get('/biblioteca/:tipo', vereficaCategoria, async (req, res) => {
    try {
        if (req.params.tipo.toLowerCase() === 'manga') {
            const colecao = await database.collection("manga").get()
            const lista = []

            colecao.forEach((doc) => {lista.push({ id: doc.id, ...doc.data() })})
           
            if (lista.length  > 0){
                res.render("versao", { table: true, itens: lista })
            } else {
                res.render("versao", { table: false})
            }
            
        } else if (req.params.tipo.toLowerCase() === 'manhwa') {

            const colecao = await database.collection("manhwa").get()
            const lista = []

            colecao.forEach((doc) => {lista.push({ id: doc.id, ...doc.data() })})
            
            if (lista.length  > 0){
                res.render("versao", { table: true, itens: lista })
            } else {
                res.render("versao", { table: false})
            }
         
        } else if (req.params.tipo.toLowerCase() === 'webcomic') {

            const colecao = await database.collection("webcomic").get()
            const lista = []

            colecao.forEach((doc) => {lista.push({ id: doc.id, ...doc.data() })})
            
            if (lista.length  > 0){
                res.render("versao", { table: true, itens: lista })
            } else {
                res.render("versao", { table: false})
            }
        } else if (req.params.tipo.toLowerCase() === 'novel') {

            const colecao = await database.collection("novel").get()
            const lista = []

            colecao.forEach((doc) => {lista.push({ id: doc.id, ...doc.data() })})
            
            if (lista.length  > 0){
                res.render("versao", { table: true, itens: lista })
            } else {
                res.render("versao", { table: false})
            }
        }

        // if (itens.length > 0) {
        //     res.render("biblioteca", { table: true, itens: itens })
        // }
        // else {
        //     res.render("biblioteca", { table: false })}
        
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})


module.exports = router