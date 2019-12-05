const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const PORT = 8081

require("../models/Patrimonio")

const Patrimonio = mongoose.model("patrimonios")

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!")
});

app.listen(PORT, function() {
    console.log(`Servidor rodando na URL http://localhost:${PORT}.`)
})

console.log("Entrei!")