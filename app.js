const bodyParser = require('body-parser')
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const usuarioRouter = require('./routes/usuario.route');
const alimentoRouter = require('./routes/alimento.route');
const cardapioRouter = require('./routes/cardapio.route');
const almocoRouter = require('./routes/almoco.route');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', usuarioRouter);
app.use('/api', alimentoRouter);
app.use('/api', cardapioRouter);
app.use('/api', almocoRouter);

module.exports = app;
