"use strict";
const Sequelize = require('sequelize');
const db = require('../config/database');


const Carros = db.define('carros',{
    idCarro:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    serie:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    marca:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    modelo:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    color:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    año: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Carros;