"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const conf = require("./../../config.json");
const api_1 = require("../routes/api");
const config = conf;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use('/api', api_1.default);
app.use((req, res) => {
    return res.end('woha!');
});
app.listen(config.APP_PORT);
exports.default = app;
