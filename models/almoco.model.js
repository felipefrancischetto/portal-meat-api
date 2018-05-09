const { Schema } = require('mongoose');
const { UsuarioSchema } = require('./usuario.model');
const { CardapioSchema } = require('./cardapio.model');
const { AgendaSchema } = require('./agenda.model');

const db = require('../db.connection');

const AltecaoSchema = new Schema({
    usuario: {
        type: UsuarioSchema,
        required: [true, 'Adicione o usuario na alteração.']
    },
    opcao: {
        type: String,
        enum: [
            'OVO FRITO',
            'OVO MEXIDO',
            'OVO COZIDO',
            'SEM PROTEÍNA'
        ],
        required: [true, 'Selecione a opção de proteína.']
    },
}, { versionKey: false });

const CancelamentoSchema = Schema({
    usuario: {
        type: UsuarioSchema,
        required: [true, 'Adicione o usuario do cancelamento.']
    },
    motivo: {
        type: String,
        enum: [
            'Vou almoçar fora',
            'Trouxe marmita',
            'Outro'
        ],
        required: [true, 'Selecione o motivo do cancelamento.']
    },
}, { versionKey : false });

const AlmocoSchema = new Schema({
    cardapio_associado: {
        type: AgendaSchema,
        required: [true, 'Adicione o cardápio associado.']
    },
    alteracoes: {
        type: [AltecaoSchema],
        default: [],
    },
    cancelamentos: {
        type: [CancelamentoSchema],
        default: [],
    },
    data: {
        type: Date,
        required: [true, 'Adicione a data do almoço.']
    }
}, { versionKey: false });

const AlmocoModel = db.model('almocos', AlmocoSchema);

module.exports = {
    AlmocoModel,
    AlmocoSchema
}