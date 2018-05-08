const { Schema } = require('mongoose');
const db = require('../db.connection');

const AlimentoSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'Insira o nome do Alimento'] 
    },
    tipo: { 
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

const AlimentoModel = db.model('alimentos', AlimentoSchema);

module.exports = {
    AlimentoSchema,
    AlimentoModel,
}