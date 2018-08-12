import * as path from 'path';
import { Router } from 'express';

const SettingsRoutes    = Router();
const Json              = Func => require('../helpers/route-helpers').JsonApi(Func, path.basename(__filename));

// SettingsRoutes.patch('/', Json(saveSettings));

// async function saveSettings (Request) {
//     throw new Error('asdoicjaosdijc')
// }

export default SettingsRoutes;
