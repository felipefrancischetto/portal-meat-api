const express = require('express');
const router = express.Router();

const { 
    almocos,
    almocoById,
    saveAlmoco,
    updateAlmoco
} = require('../controllers/almoco.controller');

router.get('/almocos', almocos);
router.get('/almocos/:id', almocoById);
router.post('/almocos', saveAlmoco);
router.put('/almocos/:id', updateAlmoco);

module.exports = router;