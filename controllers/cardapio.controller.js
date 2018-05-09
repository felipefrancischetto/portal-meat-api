const { prop } = require('ramda');

const { CardapioModel } = require('../models/cardapio.model');

const cardapios = async (req, res, next) => {
    try { 
        const cardapios = await CardapioModel.find(req.body);
        res.json(cardapios);
    } catch(err) {
        next(err);
    }
}

const cardapioById = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const cardapio = await CardapioModel.findById(_id);
        res.json(cardapio);
    } catch(err) {
        next(err);
    }
}

const saveCardapio = async (req, res, next) => { 
    try {
        const cardapio = prop('body', req);
        const cardapioModel = new CardapioModel(cardapio);
        const newCardapio = await cardapioModel.save();
        res.json(newCardapio);
    } catch(err) {
        next(err);
    }
}

const updateCardapio = async (req, res, next) => {
    try {
        const _id =  prop('id', req.params);
        const cardapio = prop('body', req);
        const cardapioUpdate = await 
        CardapioModel.findByIdAndUpdate(
                _id,
                cardapio,
                { save : true }
            );
        res.json(cardapioUpdate);
    } catch(err) {
        next(err);
    }
}

const deleteCardapio = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const cardapio = prop('body', req);
        const cardapioDelete = await
        CardapioModel.findByIdAndRemove(_id);
        res.json(cardapioDelete);
    } catch(err) {
        next(err);
    }
}

module.exports = {
    cardapios,
    cardapioById,
    saveCardapio,
    updateCardapio,
    deleteCardapio,
}