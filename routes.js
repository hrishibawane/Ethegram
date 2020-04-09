const routes = require('next-routes')();

routes
    .add("/users/:address", "/users/view/index");

module.exports = routes;