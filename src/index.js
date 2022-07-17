import express from 'express'
import rota from './routes/rota_biblioteca.js'
import rota_usuario from './routes/rota_usuario.js'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use("/biblioteca", rota)
app.use(rota_usuario)

app.listen(process.env.PORT || 4263, ()=>{ console.log(`server running on port ${process.env.PORTA}`)})
