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

const CardapioModel = db.model('cardapios', CardapioSchema);

module.exports = {
    CardapioSchema,
    CardapioModel,
}  