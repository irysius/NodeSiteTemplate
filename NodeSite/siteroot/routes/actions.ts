var express = require('express');
var actions = express.Router();

actions.get('/', function (req, res, next) {
    console.log('getting actions');
    res.json({ result: 'GET' });
});

actions.post('/', function (req, res, next) {
    console.log('posting actions');
    res.json({ result: 'POST' });
});

actions.put('/', function (req, res, next) {
    console.log('putting actions');
    res.json({ result: 'PUT' });
});

actions.delete('/', function (req, res, next) {
    console.log('deleting actions');
    res.json({ result: 'DELETE' });
});

module.exports = actions;