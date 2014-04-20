import express = require('express');
var home = require('./routes/home');
var demos = require('./routes/demos');
var rest = require('./routes/rest');
var users = require('./routes/users');

export function setupRoutes(app: express.Express) {
    app.get('/', function (req: express.Request, res: express.Response) {
        home.index(req, res);
    });
    app.get('/home', function (req, res) {
        home.index(req, res);
    });
    app.use('/demos', demos);
    app.use('/rest', rest);
    app.use('/users', users);
}