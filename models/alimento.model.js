const { Schema } = require('mongoose');
const db = require('../db.connection');

const AlimentoSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'Insira o nome do Alimento'] 
    },
    tipe: { 
        type: String,
        enum: [
            'proteína',
            'acompanhamento',
            'salada',
            'sobremesa',
        ],
        required: [true, 'Selecione o tipo do alimento.'] 
    }
}, { versionKey: false });

module.exports = db.model('alimentos', AlimentoSchema);