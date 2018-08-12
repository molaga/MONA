import * as path from 'path';
import * as express from 'express';
const AppRoutes = express.Router();

AppRoutes.use(express.static(path.join(__dirname, '../../dist/mona2')));

export default AppRoutes;
