const { createServer } = require('http');
const next = require('next');
const port = process.env.PORT ? process.env.PORT : 3000;

console.log(port);

const app = next({
    dev: process.env.NODE_ENV !== 'production',
    start: process.env.NODE_ENV === 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(port, (err) => {
        if(err) throw err;
        console.log('Ready on localhost:' + port);
    });
});