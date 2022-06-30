const { Router } = require('express');
const { body, query } =  require('express-validator');
const controladorInicio = require('../controladores/controladorinicio');
const rutas = Router();
rutas.post('/post', controladorInicio.EjemploPost);
module.exports = rutas;