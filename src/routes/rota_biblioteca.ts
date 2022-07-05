import { Router, Request, Response } from "express";
import metodoDelete from "../controllers/metodo_delete";
import metodoGet from "../controllers/metodo_get";
import metodoGetID from "../controllers/metodo_get_por_id";
import metodoPatch from "../controllers/metodo_patch";
import metodoPost from "../controllers/metodo_post";
import database from "../database/config";
import vereficaCategoria from "../middleware/verificacao_de_categoria";

const router = Router()

router.get('/:tipo', vereficaCategoria, async (req: Request, res: Response) => {
    try {
        metodoGet(req, res, database)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:tipo/:id', vereficaCategoria, async (req: Request, res: Response) => {
    try {
        metodoGetID(req, res, database)
    } catch (error) {
        res.send(error)
    }
})


router.patch('/:tipo/:id', vereficaCategoria, async (req: Request, res: Response) => {
    try {
        metodoPatch(req, res, database)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:tipo/:id', vereficaCategoria, async (req: Request, res: Response) => {

    try {
        metodoDelete(req, res, database)
    } catch (error) {
        res.send(error)
    }
})



router.post('/adicionar-na-biblioteca/:tipo', async (req: Request, res: Response) => {
    try {
        metodoPost(req, res, database)
    } catch (error) {
        res.send(error)
    }
})

export default router