const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const connection    = require('../helpers/connection');
const config        = require('./../../config.json');
const modelBuilder  = require('./../lib/model-builder');
const app           = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use((req, res) => {
    console.log(modelBuilder('test', req.body));

    return res.end();
});

app.listen(config.APP_PORT);