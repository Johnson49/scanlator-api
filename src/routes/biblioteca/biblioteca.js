const express = require('express')
const router = express.Router()
const database = require("../../database/config/config")
const read = require("../../controllers/biblioteca/get")
const readID = require("../../controllers/biblioteca/getPorID")
const update = require("../../controllers/biblioteca/patch")
const deleta = require("../../controllers/biblioteca/delete")
const create = require("../../controllers/biblioteca/post")
const vereficaCategoria = require("../../controllers/middleware/vereficaCategoria")
const time = require("timers")


router.get("/biblioteca/cadastro", (req, res) =>{
    res.render('index', {titulo: "Cadastro"})
})

router.get("/biblioteca", (req, res) =>{
    res.render('biblioteca')
})
router.get("/biblioteca/editar-informacoes", (req, res) =>{
    res.render('editar')
})

router.post("/biblioteca/adicionar", (req, res) =>{ 
    const categoria = req.body.categoria.toLocaleLowerCase()
    try {
        create(req, res, database, categoria)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

//---------

router.get('/biblioteca/:tipo',vereficaCategoria, async (req, res) => {
    try {
        read(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.get('/biblioteca/:tipo',vereficaCategoria, async (req, res) => {
    try {
        readID(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})


router.patch('/biblioteca/:tipo', vereficaCategoria, async (req, res) => {
    try {
        update(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.delete('/biblioteca/:tipo', vereficaCategoria, async (req, res) => {
    try {
        deleta(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})



// router.post('/biblioteca/adicionar-na-biblioteca/:tipo', vereficaCategoria, async (req, res) => {
//     try {
//         create(req, res, database)
//     } catch (err) {
//         res.status(500).send("Um erro inesperado ocorreu")
//     }
// })





module.exports = router