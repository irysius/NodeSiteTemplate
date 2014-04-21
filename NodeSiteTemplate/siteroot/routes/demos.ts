import fs = require('fs');
var express = require('express');
var marked = require('marked');
var auth = require('./demos/auth');

var demos = express.Router();
var root = 'demos';

// Index
demos.get('/', function (req, res, next) {
    var model = {
        title: 'Demoes'
    };
    res.render(root + '/index', model);
});

// 404
demos.get('/404', function (req, res, next) {
    var model = {
        title: '404 Demo'
    };
    res.render(root + '/404', model);
});

// Error
demos.get('/error', function (req, res, next) {
    var model = {
        title: 'Error Demo'
    };
    res.render(root + '/error', model);
});
demos.get('/error/throw', function (req, res, next) {
    throw "This url will always throw an exception";
});

// REST
demos.get('/rest', function (req, res, next) {
    var model = {
        title: 'REST Demo'
    };
    res.render(root + '/rest', model);
});

// Route Parameters
demos.get('/parameters', function (req, res, next) {
    var model = {
        title: 'Route Parameter Demo'
    };
    res.render(root + '/parameters', model);
});

// Markdown
demos.get('/markdown', function (req, res, next) {
    // one directory down from siteroot (which means node can access files outside of "designated root").
    // valid encodings include: hex, utf8, ascii, binary, base64, ucs2, and utf16le.
    fs.readFile('../Markdown.md', function (err, data) {
        // Assuming we're reading UTF-8, we strip the byte order mark (3 bytes).
        var content = data.toString('utf8', 3);
        var model = {
            title: 'Markdown Demo',
            raw: content,
            parsed: marked(content)
        };
        res.render(root + '/markdown', model);
    });
});
demos.post('/markdown', function (req, res, next) {
    var data = {
        parsed: marked(req.body.raw)
    }
    res.json(data);
});

// Sockets
demos.get('/sockets', function (req, res, next) {
    var model = {
        title: 'Socket.io Demo'
    };
    res.render(root + '/sockets', model);
});

// Authentication
demos.use('/auth', auth);

module.exports = demos;