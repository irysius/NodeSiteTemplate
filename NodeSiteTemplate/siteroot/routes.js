var home = require('./routes/home');
var demos = require('./routes/demos');
var rest = require('./routes/rest');
var users = require('./routes/users');

function setupRoutes(app) {
    app.get('/', function (req, res) {
        home.index(req, res);
    });
    app.get('/home', function (req, res) {
        home.index(req, res);
    });
    app.use('/demos', demos);
    app.use('/rest', rest);
    app.use('/users', users);
}
exports.setupRoutes = setupRoutes;
