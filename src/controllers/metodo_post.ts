import { Request, Response } from "express";

async function post(req: Request, res: Response, database: any, categoria: String) {
    const { titulo, genero, lancamento, status, autor, descricao, artista } = req.body
    const novo_documento: any = {
        "título": titulo,
        autor: autor,
        "artista(s)": artista,
        "gênero(s)": genero,
        "descrição": descricao,
        "ano de lançamento": Number(lancamento),
        status: status,
    }
    const doc = await database.collection(categoria).add(novo_documento)
    res.status(201).json(doc)
}

async function metodoPost(req: Request, res: Response, database: any) {

    if (req.params.tipo.toLowerCase() === 'manga') {
        post(req, res, database, "mangas")
    } else if (req.params.tipo.toLowerCase() === 'manhwa') {
        post(req, res, database, "manhwa")
    } else if (req.params.tipo.toLowerCase() === 'webcomic') {
        post(req, res, database, "webcomic")
    } else if (req.params.tipo.toLowerCase() === 'novel') {
        post(req, res, database, "novel")
    }
}

export default metodoPost