const Alimento = require('../models/alimento.model');
const { prop } = require('ramda');

const alimentos = async (req, res, next) => {
    try {
        const usuarios = await Alimento.find(req.body);
        res.send(usuarios);
    } catch (err) {
        next(err);
    }
}

