import { Router } from "express";
import vereficaCredenciais from "../middleware/verefica_credenciais";


const rota_usuario = Router()

rota_usuario.post('/', vereficaCredenciais,async (req, res) => {
    try {
        res.send("")
    } catch (err) {
        res.status(500).send("Um erro inesperado ocorreu")
    }
})

export default rota_usuario
