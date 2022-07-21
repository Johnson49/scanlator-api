
async function getID(req, res, database, categoria) {
    const documento = await database.collection(categoria).doc(req.query.id).get()
    res.status(200).json(documento.data())
}

async function readID(req, res, database) {
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

module.exports = readID
