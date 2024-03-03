const Router = require('restify-router').Router;
const { UserController } = require('../src/modules/user/user.controller');
const { UserService } = require('./modules/user/user.service');

const { PointSystemService } = require('./modules/pointSystem/pointSystem.service');
const { PointSystemController } = require('./modules/pointSystem/pointSistem.controller');


const rotes = new Router();

const userService = new UserService();
const userController = new UserController(userService);

rotes.get('/user/:id', async (req, res, next) => {
  await userController.getUserById(req, res, next)
});

rotes.get('/user/listUsers', async (req, res, next) => {
  await userController.getUsers(req, res, next)
});

rotes.post('/user/createUsers', async (req, res, next) => {
  await userController.create(req, res, next)
});

rotes.put('/user/delete/:id', async (req, res, next) => {
  await userController.delete(req, res, next)
});

rotes.put('/user/:id', async (req, res, next) => {
  await userController.update(req, res, next)
});




const pointSistemService =  new PointSystemService();
const pointSistemController = new PointSystemController(pointSistemService);

rotes.post('/sytemPoint', async (req, res, next) => {
  await pointSistemController.create(req, res, next);
});

rotes.put('/sytemPoint', async (req, res, next) => {
  await pointSistemController.finishPoint(req, res, next);
});

rotes.get('/sytemPoint/list', async (req, res, next) => {
  await pointSistemController.allPoints(req, res, next);
});






















module.exports = rotes
