"use strict";
const express = require("express");
const app = express();

//Load Global Settings
    const endPoint = `/API`;

//Import Routes
    const rutasdeCarros = require('../src/ruteador');

//Configure Routes for Json
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use((req, res, next)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Whih, Content-Type, Accept, Access-Allow-request-Method' );
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    })


//Configure Endpoints
    app.use(`${endPoint}/Carros`, rutasdeCarros);

    app.use(`${endPoint}/Saludo`, (req, res)=>{
        res.status(200).json({
            'Mensaje': 'Hola! gracias por vistarnos'
        });
    })

    app.use('*', function(req, res) {
        res.status(404).json({'Error': 'Página no encontrada.'});
    });


module.exports = app;