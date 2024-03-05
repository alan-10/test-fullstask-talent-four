const Router = require('restify-router').Router;

const pointSystemRoutes = new Router()


const { PointSystemService } = require('./pointSystem.service');
const { PointSystemController } = require('./pointSistem.controller');

const pointSistemService = new PointSystemService();
const pointSistemController = new PointSystemController(pointSistemService);

pointSystemRoutes.post('/sytemPoint', async (req, res, next) => {
  await pointSistemController.create(req, res, next);
});

pointSystemRoutes.put('/sytemPoint', async (req, res, next) => {
  await pointSistemController.finishPoint(req, res, next);
});

pointSystemRoutes.get('/sytemPoint/list', async (req, res, next) => {
  await pointSistemController.allPoints(req, res, next);
});


module.exports = {
  pointSystemRoutes
}