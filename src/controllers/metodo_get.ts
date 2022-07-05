import { Request, Response } from "express";

async function get(res: Response, database: any, categoria: String) {
    const colecao = await database.collection(categoria).get()
    const lista: any[] = [] //cria uma interface filme.

    colecao.forEach((doc: { id: any; data: () => any; }) => {
        lista.push({ id: doc.id, ...doc.data() })
    })
    if(lista.length < 1){ 
       
        return res.send( "Categoria mangá está vazia. Após adicionar alguns titulos, eles apareceram aqui. ") 
        
     }
    res.status(200).json(lista)
}

async function metodoGet(req: Request, res: Response, database: any) {
    try {
        if (req.params.tipo.toLowerCase() === 'manga') {

            get(res, database, 'mangas')

        } else if (req.params.tipo.toLowerCase() === 'manhwa') {
            
            get(res, database, 'manhwa')

        } else if (req.params.tipo.toLowerCase() === 'webcomic') {

            get(res, database, 'webcomic')

        } else if (req.params.tipo.toLowerCase() === 'novel') {

            get(res, database, 'novel')

        }

    } catch (error) {
        res.send(error)
    }
}

export default metodoGet