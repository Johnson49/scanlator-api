import Router  from "express";
import metodoDelete from "../controllers/biblioteca/metodo_delete.js";
import metodoGet from "../controllers/biblioteca/metodo_get.js";
import metodoGetID from "../controllers/biblioteca/metodo_get_por_id.js";
import metodoPatch from "../controllers/biblioteca/metodo_patch.js";
import metodoPost from "../controllers/biblioteca/metodo_post.js";
import database from "../database/config.js";
import vereficaCategoria from "../middleware/verificacao_de_categoria.js";

const rota = Router()

rota.get('/:tipo', vereficaCategoria, async (req, res) => {
    try {
        metodoGet(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

rota.get('/:tipo/:id', vereficaCategoria, async (req, res) => {
    try {
        metodoGetID(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})


rota.patch('/:tipo/:id', vereficaCategoria, async (req, res) => {
    try {
        metodoPatch(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

rota.delete('/:tipo/:id', vereficaCategoria, async (req, res) => {
    try {
        metodoDelete(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})



rota.post('/adicionar-na-biblioteca/:tipo', async (req, res) => {
    try {
        metodoPost(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

export default rota;