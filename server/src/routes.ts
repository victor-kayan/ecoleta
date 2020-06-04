import express from 'express';

import PointsCrontroller from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsCrontroller();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/point', pointsController.create);
routes.get('/point/:id', pointsController.show);

export default routes;