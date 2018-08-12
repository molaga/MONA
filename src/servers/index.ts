// const express       = require('express');
// const bodyParser    = require('body-parser');
// const config        = require('./../../config.json');
// const modelBuilder  = require('./../lib/model-builder');
// const ApiRoutes     = require('./../routes/api');
// const AppRoutes     = require('./../routes/app');
// TODO this is simple
/*
*
* asdc
* as
* dc
* asdc
* as
* dc
* asdc
* ads
*
* */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as conf from './../../config.json';
import Config from '../typings/config';

const config = <Config>(<any>conf);
const app           = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
// app.use('/api', ApiRoutes);
// app.use(AppRoutes);
app.use((req, res) => {
    // console.log(modelBuilder('test', req.body));

    return res.end('woha!');
});

app.listen(config.APP_PORT);

export default app;
