import { Router, Request, Response, } from "express";
import vereficaCredenciais from "../middleware/verefica_credenciais";


const rota_usuario = Router()

rota_usuario.post('/', vereficaCredenciais,async (req: Request, res: Response) => {
    try {
        res.send("")
    } catch (error) {
        res.send(error)
    }
})

export default rota_usuario
