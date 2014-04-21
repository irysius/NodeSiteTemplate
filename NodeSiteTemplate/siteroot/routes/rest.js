var express = require('express');
var rest = express.Router();

rest.get('/', function (req, res, next) {
    console.log('getting actions');
    res.json({ result: 'GET' });
});

rest.post('/', function (req, res, next) {
    console.log('posting actions');
    res.json({ result: 'POST' });
});

rest.put('/', function (req, res, next) {
    console.log('putting actions');
    res.json({ result: 'PUT' });
});

rest.delete('/', function (req, res, next) {
    console.log('deleting actions');
    res.json({ result: 'DELETE' });
});

module.exports = rest;
