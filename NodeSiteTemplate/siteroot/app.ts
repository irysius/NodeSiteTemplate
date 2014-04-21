import express = require('express');
import http = require('http');
import https = require('https');
import routes = require('./routes');
import sockets = require('./sockets');
var io = require('socket.io');

// Connect/Express middleware
var body_parser = require('body-parser');
var compression = require('compression');
var errorhandler = require('errorhandler');
var method_override = require('method-override');

var app = express();

// Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'vash');

// Configuration
app.use(compression());
app.use(body_parser());
app.use(method_override());

// Routes
routes.setupRoutes(app);

// Catch All
app.use(express.static(__dirname + '/public'));
app.use(function (req: express.Request, res: express.Response, next) {
    res.status(404);
    if (req.accepts('html')) {
        res.render('_shared/404');
        return;
    }
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
    res.type('txt').send('Not found');
});
app.use(errorhandler({ dumpExceptions: true, showStack: true }));


// Start the server
var httpServer = http.createServer(app);

io = io.listen(httpServer);
io.set('log level', 1);

httpServer.listen(1337); // use 0 to assign random port
httpServer.on('listening', function () {
    console.log('listening on port: ', httpServer.address().port);
});

// var httpsServer = https.createServer(options, app);
// httpsServer.listen(443);

sockets.setupSockets(io);
