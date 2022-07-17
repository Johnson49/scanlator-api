import { Router } from "express";
import metodoDelete from "../controllers/biblioteca/metodo_delete";
import metodoGet from "../controllers/biblioteca/metodo_get";
import metodoGetID from "../controllers/biblioteca/metodo_get_por_id";
import metodoPatch from "../controllers/biblioteca/metodo_patch";
import metodoPost from "../controllers/biblioteca/metodo_post";
import database from "../database/config";
import vereficaCategoria from "../middleware/verificacao_de_categoria";

const router = Router()

router.get('/:tipo', vereficaCategoria, async (req, res) => {
    try {
        metodoGet(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.get('/:tipo/:id', vereficaCategoria, async (req, res) => {
    try {
        metodoGetID(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})


router.patch('/:tipo/:id', vereficaCategoria, async (req, res) => {
    try {
        metodoPatch(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

router.delete('/:tipo/:id', vereficaCategoria, async (req, res) => {
    try {
        metodoDelete(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})



router.post('/adicionar-na-biblioteca/:tipo', async (req, res) => {
    try {
        metodoPost(req, res, database)
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

export default router