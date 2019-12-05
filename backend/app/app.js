// Módulos
    const express = require('express')
    const bodyparser = require('body-parser')
    const app = express()
    const mongoose = require("mongoose")
    const session = require("express-session")
    const flash = require("connect-flash")

// Configurações
    // Sessão
    app.use(session({
        secret: "teste",
        resave: true,
        saveUninitaliazed: true
    }))
    app.use(flash())
    // Middlewares

    // Body-parser

    // Mongoose
        mongoose.connect("mongodb://localhost/cadebal", {useNewUrlParser: true}).then(() => {
            console.log("Conectado ao mongo");
        }).catch((err) => {
            console.log("Erro ao se conectar" + err);
        })
    // Public

    console.log("Teste")