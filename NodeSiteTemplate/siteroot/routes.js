var home = require('./routes/home');
var actions = require('./routes/actions');
var users = require('./routes/users');

function setupRoutes(app) {
    app.get('/', function (req, res) {
        home.index(req, res);
    });
    app.use('/actions', actions);
    app.use('/users', users);
}
exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map
