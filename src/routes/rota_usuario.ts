import { Router, Request, Response, } from "express";
import vereficaCredenciais from "../middleware/verefica_credenciais";


const rota_usuario = Router()

rota_usuario.get('/login', async (req: Request, res: Response) => {
  
    try {
        res.sendFile("../public/index.html")
    } catch (error) {
        res.send(error)
    }
})
rota_usuario.get('/imagem', async (req: Request, res: Response) => {
  
    try {
        res.sendFile("../public/img/login.svg")
    } catch (error) {
        res.send(error)
    }
})

rota_usuario.post('/', vereficaCredenciais,async (req: Request, res: Response) => {
    try {
        res.send("<h1>bem-vindo</h1>")
    } catch (error) {
        res.send(error)
    }
})

export default rota_usuario