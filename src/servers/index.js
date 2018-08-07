const express       = require('express');
const bodyParser    = require('body-parser');
const config        = require('./../../config.json');
const modelBuilder  = require('./../lib/model-builder');
const ApiRoutes     = require('./../routes/api');
const AppRoutes     = require('./../routes/app');
const app           = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use('/api', ApiRoutes);
app.use(AppRoutes);
// app.use((req, res) => {
//     console.log(modelBuilder('test', req.body));
//
//     return res.end();
// });

app.listen(config.APP_PORT);

module.exports = app;