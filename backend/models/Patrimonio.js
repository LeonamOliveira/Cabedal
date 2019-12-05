const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Patrimonio = new Schema({
    numPat: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    local: {
        type: String
    },
    notFis: {
        type: Number
    },
    quantity: {
        type: Number
    },
    campus: {
        type: Number
    }
})