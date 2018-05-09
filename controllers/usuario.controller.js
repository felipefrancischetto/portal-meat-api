const { prop } = require('ramda');

const { UsuarioModel } = require('../models/usuario.model');

const usuarios = async (req, res, next) => {
    try { 
        const usuarios = await UsuarioModel.find(req.query);
        res.json(usuarios);
    } catch (err) {
        next(err)
    }
}

const usuarioById = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const usuario = await UsuarioModel.findById(_id);
        res.json(usuario)
    } catch (err) {
        next(err)
    }
}

const saveUsuario = async (req, res, next) => {
    try {
        const usuario = prop('body', req);
        const usuarioModel = new UsuarioModel(usuario);
        const newUsuario = await usuarioModel.save();
        res.json(newUsuario);
    } catch (err) {
        next(err)
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const usuario = prop('body', req);
        const usuarioUpdate = await UsuarioModel
            .findByIdAndUpdate(
                _id, 
                usuario,
                { new: true }
            );
        res.json(usuarioUpdate);
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