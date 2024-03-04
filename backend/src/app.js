const restify = require('restify');
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

const rotes = require('./routes');


const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

rotes.applyRoutes(server);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});