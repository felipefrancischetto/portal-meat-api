const { prop, sortBy } = require('ramda');

const { AgendaModel } = require('../models/agenda.model');

const agendados = async (req, res, next) => {
    try {
        const sortById = sortBy(prop('_id'));
        const agendados = await AgendaModel.find(req.body);
        res.json(sortById(agendados));
    } catch (err) {
        next(err);
    }
}

const agendadoById = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const agendado = await AgendaModel.findById(_id);
        res.json(agendado);
    } catch (err) {
        next(err);
    }
}

const adicionarDiaDaSemana = async (req, res, next) => {
    try {
        const dia = prop('body', req);
        const agendaModel = new AgendaModel(dia);
        const newDia = await agendaModel.save();
        res.json(newDia);
    } catch (err) {
        next(err);
    }
}

const agendar = async (req, res, next) => {
    try {
        const _id = prop('id', req.params);
        const dia = prop('body', req.params);
        const agendar = await AgendaModel
            .findByIdAndUpdate(
                _id,
                dia,
                { new: true }
            );
        res.json(agendar);
    } catch(err) {
        next(err);
    }
}

module.exports = {
    agendados,
    agendadoById,
    adicionarDiaDaSemana,
    agendar
}