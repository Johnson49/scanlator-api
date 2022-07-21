const express = require('express')
const router = express.Router()
const database = require("../../database/config/config")
const read = require("../../controllers/biblioteca/get")
const readID = require("../../controllers/biblioteca/getPorID")
const update = require("../../controllers/biblioteca/patch")
const deleta = require("../../controllers/biblioteca/delete")
const create = require("../../controllers/biblioteca/post")
const vereficaCategoria = require("../../controllers/middleware/vereficaCategoria")


router.get('/:tipo',vereficaCategoria, async (req, res) => {
    try {
        read(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.get('/:tipo',vereficaCategoria, async (req, res) => {
    try {
        readID(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})


router.patch('/:tipo', vereficaCategoria, async (req, res) => {
    try {
        update(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.delete('/:tipo', vereficaCategoria, async (req, res) => {
    try {
        deleta(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})



router.post('/adicionar-na-biblioteca/:tipo', vereficaCategoria, async (req, res) => {
    try {
        create(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

module.exports = router