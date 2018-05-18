const { Schema } = require('mongoose');
const { CardapioSchema } = require('./cardapio.model');

const db = require('../db.connection');

const AgendaSchema = new Schema({
    _id: {
        type: Number,
        required: [true, 'Adicione o número do id do dia da semana. ']
    },
    diaDaSemana: {
        type: String,
        required: [true, 'Adicione o dia da semana.']
    },
    cardapio: {
        type: CardapioSchema,
        default: null,
    }

}, { versionKey: false });

const AgendaModel = db.model('agendados', AgendaSchema);

module.exports = {
    AgendaModel,
    AgendaSchema,
}