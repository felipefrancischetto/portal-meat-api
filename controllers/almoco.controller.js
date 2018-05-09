const { prop } = require('ramda');

const { AlmocoModel } = require('../models/almoco.model');

const almocos = async (req, res, next) => {
    try {
        const almocos = await AlmocoModel.find(req.body);
        res.json(almocos);
    } catch(err) {
        next(err);
    }
}

const almocoById = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const almoco = await AlmocoModel.findById(_id);
        res.json(almoco);
    } catch(err) {
        next(err);
    }
}

const saveAlmoco = async (req, res, next) => {
    try {
        const almoco = prop('body', req);
        const almocoModel = new AlmocoModel(almoco);
        const newAlmoco = await almocoModel.save();
        res.json(newAlmoco);
    } catch(err) {
        next(err);
    }
}

const updateAlmoco = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const almoco = prop('body', req);
        const almocoUpdate = await
        AlmocoModel.findByIdAndUpdate(
            _id,
            almoco,
            { save: true }
        );
        res.json(almocoUpdate);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    almocos,
    almocoById,
    saveAlmoco,
    updateAlmoco,
}