const ApiRoutes         = require('express').Router();
const SettingsRoutes    = require('./../routes/settings');

ApiRoutes.use('/settings', SettingsRoutes);

ApiRoutes.use((req, res) => {
    return res.json({ Success: true });
});

module.exports = ApiRoutes;