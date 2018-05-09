const { prop } = require('ramda');

const { AlimentoModel } = require('../models/alimento.model');

const alimentos = async (req, res, next) => {
    try {
        const usuarios = await AlimentoModel.find(req.body);
        res.json(usuarios);
    } catch (err) {
        next(err);
    }
}

const alimentoById = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const alimento = await AlimentoModel.findById(_id);
        res.json(alimento);
    } catch (err) {
        next(err);
    }
}

const saveAlimento = async (req, res, next) => {
    try {
        const alimento = prop('body', req);
        const alimentoModel = new AlimentoModel(alimento);
        const newAlimento = await alimentoModel.save();
        res.json(newAlimento);
    } catch (err) {
        next(err)
    }
}

const updateAlimento = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const alimento = prop('body', req);            
        const alimentoUpdate = await AlimentoModel
            .findByIdAndUpdate(
                _id,
                alimento,
                { new: true },
            );
        res.json(alimentoUpdate);
    } catch (err) {
        next(err);
    }
}

deleteAlimento = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const alimento = prop('body', req)
        const alimentoRemove = await AlimentoModel
            .findByIdAndRemove(_id);
        res.json(alimentoRemove);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    alimentos,
    alimentoById,
    updateAlimento,
    saveAlimento,
    deleteAlimento
}