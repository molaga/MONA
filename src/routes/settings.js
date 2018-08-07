const SettingsRoutes    = require('express').Router();
const path              = require('path');
const Json              = Func => require('../helpers/route-helpers').JsonApi(Func, path.basename(__filename));

SettingsRoutes.patch('/', Json(saveSettings));

async function saveSettings (Request) {
    throw new Error('asdoicjaosdijc')
}

module.exports = SettingsRoutes;