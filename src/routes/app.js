const path      = require('path');
const express   = require('express');
const AppRoutes = express.Router();

AppRoutes.use(express.static(path.join(__dirname, '../../dist/mona2')));

module.exports = AppRoutes;