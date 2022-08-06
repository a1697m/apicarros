"use strict";
const express = require('express');
const router = express.Router();
const ControladorCarros = require('./controlador');

router.get('/', ControladorCarros.obtenerTodosLosCarros);

module.exports = router;