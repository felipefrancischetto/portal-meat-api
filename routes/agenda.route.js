const express = require('express');
const router = express.Router();
const {
    agendados,
    agendadoById,
    adicionarDiaDaSemana,
    agendar
} = require('../controllers/agenda.controller');

router.get('/agendados', agendados);
router.get('/agendados/:id', agendadoById);
router.post('/agendados', adicionarDiaDaSemana);
router.put('/agendados/:id', agendar);

module.exports = router;