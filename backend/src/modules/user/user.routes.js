const Router = require('restify-router').Router;
const userRoutes = new Router();

const { UserController } = require('./user.controller');
const { UserService } = require('./user.service');

const userService = new UserService();
const userController = new UserController(userService);

userRoutes.get('/user/:id', async (req, res, next) => {
  await userController.getUserById(req, res, next)
});

userRoutes.get('/user/listUsers', async (req, res, next) => {
  await userController.getUsers(req, res, next)
});

userRoutes.post('/user/createUsers', async (req, res, next) => {
  await userController.create(req, res, next)
});

userRoutes.put('/user/delete/:id', async (req, res, next) => {
  await userController.delete(req, res, next)
});

userRoutes.put('/user/:id', async (req, res, next) => {
  await userController.update(req, res, next)
});


module.exports =  {
  userRoutes
}

