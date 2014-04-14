﻿import express = require('express');
import home = require('./routes/home');
var actions = require('./routes/actions');

export function setupRoutes(app: express.Express) {
    app.get('/', function (req: express.Request, res: express.Response) {
        home.index(req, res);
    });
    app.use('/users', actions);
}