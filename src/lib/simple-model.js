const mongoose = require('mongoose');
const MODEL_NAME = '';
const schema = new mongoose.Schema({

}, {
    collection: MODEL_NAME
});

module.exports = mongoose.model(MODEL_NAME, schema);