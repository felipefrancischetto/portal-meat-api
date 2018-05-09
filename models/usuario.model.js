const { Schema } = require('mongoose');
const db = require('../db.connection');

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'Insira o nome do usuário.']
    },
    email: {
        type: String,
        required: [true, 'Insira o email do usuário.']
    },
    username: {
        type: String,
        required: [true, 'Insira o username do usuário.']
    },
    password: {
        type: String,
        required: [true, 'Insira o password do usuário.']
    },
    tipo: {
        type: String,
        enum: [
            'ADMIN',
            'USER'
        ],
        required: [true, 'Selecione o tipo de nível de acesso do usuário.']
    },
    estado: {
        type: String,
        default: 'ATIVO',
        enum: [
            'ATIVO',
            'DESLIGADO',
            'FERIAS',
            'AFASTADO',
        ],
        required: [true, 'Selecione o estado atual do usuário.']
    }
}, { versionKey: false });

const UsuarioModel = db.model('usuarios', UsuarioSchema);

module.exports = {
    UsuarioSchema,
    UsuarioModel,
}

