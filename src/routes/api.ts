import { Router } from 'express';
import SettingsRoutes from '../routes/settings';

const ApiRoutes         = Router();
// const SettingsRoutes    = require('./../routes/settings');

ApiRoutes.use('/settings', SettingsRoutes);

ApiRoutes.use((req, res) => {
    return res.json({ Success: true });
});

export default ApiRoutes;