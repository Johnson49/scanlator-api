import { Request, Response } from "express";

function vereficaCategoria(req: Request, res: Response, next: any) {
    const categoria: Array<string> = ["manga", "manhwa", "webcomic", "novel"]
    if (categoria.includes(req.params.tipo.toLowerCase())) {
        next()
    } else{
        res.status(404).send("Categoria não encontrada")
    }
}

export default vereficaCategoria