//const dotenv = require('dotenv')
//dotenv.config()
const express = require('express')
const app = express()

const path = require("path");
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"))
    console.log("GET /views/index.html")
})



const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if (err) {console.log("Error al iniciar el servidor")}
    else { console.log("Servidor corriendo en el puerto ", PORT)}
})


