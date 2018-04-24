const jsonServer = require('json-server');
const defaultData = require('./db.default.json');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.post('/reset', (req, res) => {
  router.db.setState(defaultData);
  res.jsonp(req.body);
})

server.use(middlewares);
server.use(router);

server.listen(port);
