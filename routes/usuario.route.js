const express = require('express');
const router = express.Router();
const { 
    usuarios,
    usuarioById,
    saveUsuario,
    updateUsuario
} = require('../controllers/usuario.controller');

router.get('/usuarios', usuarios);
router.get('/usuarios/:id', usuarioById);
router.post('/usuarios', saveUsuario);
router.put('/usuarios:id', updateUsuario);

module.exports = router;
