import { Request, Response } from "express";

async function getID(req: Request, res: Response, database: any, categoria: string) {
    const documento = await database.collection(categoria).doc(req.params.id).get()
    res.status(200).json(documento.data())
}

async function metodoGetID(req: Request, res: Response, database: any) {

    if (req.params.tipo.toLowerCase() === 'manga') {

        getID(req, res, database, "mangas")

    } else if (req.params.tipo.toLowerCase() === 'manhwa') {

        getID(req, res, database, "manhwa")

    } else if (req.params.tipo.toLowerCase() === 'novel') {
        getID(req, res, database, "novel")

    } else if (req.params.tipo.toLowerCase() === 'webcomic') {
        getID(req, res, database, "webcomic")
    }
}

export default metodoGetID