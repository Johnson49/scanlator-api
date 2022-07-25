const express = require("express")
const router = require("./routes/biblioteca/biblioteca")
const hbs = require("express-handlebars")
require('dotenv').config()
const bodyParser = require("body-parser")
const app = express()


app.engine("hbs", hbs.engine({
    extname: ".hbs",
    defaultLayout: 'main'
}));
app.set("view engine", "hbs"); 
app.set('views',__dirname+"\\views");

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render("home")
})

app.use(express.json())
app.use(router )

app.listen(process.env.PORT, ()=>{ console.log(`server running on port ${process.env.PORT}`)})