var _ = require('lodash');
var express = require('express');
var users = express.Router();

// test db.
var userdb = [
    { firstname: 'Alpha', lastname: 'Smith', gender: 'female' },
    { firstname: 'Bravo', lastname: 'Doe', gender: 'male' },
    { firstname: 'Charlie', lastname: 'Jones', gender: 'male' },
    { firstname: 'Delta', lastname: 'Burnet', gender: 'male' }
];

// demonstrates route parameters
users.get('/:userid/firstname', function (req, res, next) {
    var userid = parseInt(req.params.userid);
    var user = userdb[userid - 1];
    if (!user) {
        res.json({ result: false });
    } else {
        res.json({ firstname: user.firstname });
    }
});

users.get('/:userid', function (req, res, next) {
    var userid = parseInt(req.params.userid);
    var user = userdb[userid - 1];
    if (!user) {
        res.json({ result: false });
    } else {
        res.json(user);
    }
});

users.get('/', function (req, res, next) {
    // demonstrates the user of query strings
    if (req.query.gender) {
        res.json(_.where(userdb, { gender: req.query.gender }));
    }
    res.json(userdb);
});

users.post('/', function (req, res, next) {
    // demonstrates body parser in action
    console.log(req.body);
    var length = userdb.push(req.body);
    res.json({ id: length });
});

module.exports = users;
//# sourceMappingURL=users.js.map
