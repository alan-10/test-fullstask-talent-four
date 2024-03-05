
const { server } = require('./server');
const { userRoutes } = require('./modules/user/user.routes');
const { pointSystemRoutes } = require('./modules/pointSystem/pointSytem.routes');


userRoutes.applyRoutes(server);
pointSystemRoutes.applyRoutes(server);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});