const Usuario = require('../models/usuario.model');
const { prop } = require('ramda');

const usuarios = async (req, res, next) => {
    try { 
        const usuarios = await Usuario.find(req.query);
        res.send(usuarios);
    } catch (err) {
        next(err)
    }
}

const usuarioById = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const usuario = await Usuario.findById(_id);
    } catch (err) {
        next(err)
    }
}

const saveUsuario = async (req, res, next) => {
    try {
        const usuario = prop('body', req);
        const usuarioModel = new Usuario(usuario);
        const newUsuario = await usuarioModel.save();
        res.json(newUsuario);
    } catch (err) {
        next(err)
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const quilometragem = prop('body', req);
        const _id = prop('id', req.params);
        const usuarioUpdate = await Usuario
            .findByIdAndUpdate(_id, usuario, {
                runValidators: true
            });
    } catch (err) {
        next(err)
    }
}

module.exports = {
    usuarios,
    usuarioById,
    updateUsuario,
    saveUsuario
}