const express = require('express');
const router = express.Router();
const {  
    cardapios,
    cardapioById,
    saveCardapio,
    updateCardapio,
    deleteCardapio
} = require('../controllers/cardapio.controller');

router.get('/cardapios', cardapios);
router.get('/cardapios/:id', cardapioById);
router.post('/cardapios', saveCardapio);
router.put('/cardapios/:id', updateCardapio);
router.delete('/cardapios/:id', deleteCardapio);

module.exports = router;