var express = require('express');
var everyauth = require('everyauth');
var basicauth = require('basic-auth');

var auth = express.Router();
var root = 'demos/auth';

// Index
auth.get('/', function (req, res, next) {
    var model = {
        title: 'Authentication Demo'
    };
    res.render(root + '/index', model);
});

// Basic
auth.get('/basic', function (req, res, next) {
    var user = basicauth(req);
    console.log(user);

    var model = {
        title: 'Basic Authentication'
    };

    if (!user) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic');
        res.render(root + '/failure', model);
        return;
    }

    // basic-auth module returns a user with name and pass (not username or password).
    if (user.name === 'username' && user.pass === 'password') {
        res.render(root + '/success', model);
    } else {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic');
        res.render(root + '/failure', model);
    }
});

module.exports = auth;
