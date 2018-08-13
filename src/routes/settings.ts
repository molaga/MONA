import * as path from 'path';
import { Router } from 'express';
import { JsonApi } from '../helpers/route-helpers';

const SettingsRoutes    = Router();
const Json              = Func => JsonApi(Func, path.basename(__filename));

SettingsRoutes.patch('/', Json(saveSettings));

async function saveSettings (Request) {
    throw new Error('asdoicjaosdijc');
}

export default SettingsRoutes;
