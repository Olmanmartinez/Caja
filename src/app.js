const express = require('express');
const req = require('express/lib/request');
const morgan = require('morgan');
const app = express();
app.set('port', 3001);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api/', require ('./rutas'));
app.listen(app.get('port'),() => {
    console.log("Servidor iniciado en el puerto " + app.get('port'));
});