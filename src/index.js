import express from 'express'
import router from './routes/rota_biblioteca'
import * as dotenv from 'dotenv'
import rota_usuario from './routes/rota_usuario'

dotenv.config()
const app = express()

app.use(express.json())
app.use("/biblioteca", router)
app.use(rota_usuario)

app.listen(process.env.PORT || 4263, ()=>{ console.log(`server running on port ${process.env.PORTA}`)})

