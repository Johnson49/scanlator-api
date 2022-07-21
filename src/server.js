const express = require("express")
const router = require("./routes/biblioteca/biblioteca")
require('dotenv').config()

const app = express()
app.use(express.json())
app.use("/biblioteca", router )


app.listen(process.env.PORT, ()=>{ console.log(`server running on port ${process.env.PORT}`)})