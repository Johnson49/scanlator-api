// const read = require("../../controllers/biblioteca/get")
// const readID = require("../../controllers/biblioteca/getPorID")
// const update = require("../../controllers/biblioteca/patch")
// const deleta = require("../../controllers/biblioteca/delete")
// const create = require("../../controllers/biblioteca/post")

// router.get('/biblioteca/:tipo',vereficaCategoria, async (req, res) => {
//     try {
//         read(req, res, database)
//     } catch (err) {
//         res.status(500).send("Um erro inesperado ocorreu")
//     }
// })

// router.get('/biblioteca/:tipo', vereficaCategoria, async (req, res) => {
//     try {
//         readID(req, res, database)
//     } catch (err) {
//         res.status(500).send("Um erro inesperado ocorreu")
//     }
// })


// router.patch('/biblioteca/atualizar', vereficaCategoria, async (req, res) => {

//     try {
//         update(req, res, database)
//     } catch (err) {
//         res.status(500).send("Um erro inesperado ocorreu")
//     }
// })

// router.delete('/biblioteca/:tipo', vereficaCategoria, async (req, res) => {
//     try {
//         deleta(req, res, database)
//     } catch (err) {
//         res.status(500).send("Um erro inesperado ocorreu")
//     }
// })



// router.post('/biblioteca/adicionar-na-biblioteca/:tipo', vereficaCategoria, async (req, res) => {
//     try {
//         create(req, res, database)
//     } catch (err) {
//         res.status(500).send("Um erro inesperado ocorreu")
//     }
// })

