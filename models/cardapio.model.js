const { Schema } = require('mongoose');
const { AlimentoSchema } = require('./alimento.model');
const db = require('../db.connection');

const CardapioSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'Adicione o nome do Cardápio.']
    },
    alimentos: {
        type: [AlimentoSchema],
        default: []
    }
}, { versionKey : false })

module.exports = db.model('cardapios', CardapioSchema); 