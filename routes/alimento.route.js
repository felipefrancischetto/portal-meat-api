const express = require('express');
const router = express.Router();
const {
    alimentos,
    alimentoById,
    updateAlimento,
    saveAlimento,
    deleteAlimento
} = require('../controllers/alimento.controller');

router.get('/alimentos', alimentos);
router.get('/alimentos/:id', alimentoById);
router.post('/alimentos', saveAlimento);
router.put('/alimentos/:id', updateAlimento);
router.delete('/alimentos/:id', deleteAlimento);

module.exports = router;