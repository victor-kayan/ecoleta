import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import PointsCrontroller from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import { createPointValidation } from './config/celebrate';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsCrontroller();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post(
  '/points',
  upload.single('image'),
  createPointValidation,
  pointsController.create
);

export default routes;