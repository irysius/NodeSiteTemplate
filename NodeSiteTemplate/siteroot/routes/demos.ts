var express = require('express');
var demos = express.Router();
var root = 'demos';

demos.get('/', function (req, res, next) {
    var model = {
        title: 'Demoes'
    };
    res.render(root + '/index', model);
});
demos.get('/index', function (req, res, next) {
    var model = {
        title: 'Demoes'
    };
    res.render(root + '/index', model);
});
demos.get('/404', function (req, res, next) {
    var model = {
        title: '404 Demo'
    };
    res.render(root + '/404', model);
});
demos.get('/error', function (req, res, next) {
    var model = {
        title: 'Error Demo'
    };
    res.render(root + '/error', model);
});
demos.get('/error/throw', function (req, res, next) {
    throw "This url will always throw an exception";
});
demos.get('/rest', function (req, res, next) {
    var model = {
        title: 'REST Demo'
    };
    res.render(root + '/rest', model);
});
demos.get('/parameters', function (req, res, next) {
    var model = {
        title: 'Route Parameter Demo'
    };
    res.render(root + '/parameters', model);
});
demos.get('/markdown', function (req, res, next) {
    var model = {
        title: 'Markdown Demo'
    };
    res.render(root + '/markdown', model);
});
demos.get('/basicauth', function (req, res, next) {
    var model = {
        title: 'Basic Auth Demo'
    };
    res.render(root + '/basicauth', model);
});
demos.get('/sockets', function (req, res, next) {
    var model = {
        title: 'Socket.io Demo'
    };
    res.render(root + '/sockets', model);
});

module.exports = demos;