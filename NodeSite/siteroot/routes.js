var home = require('./routes/home');
var actions = require('./routes/actions');

function setupRoutes(app) {
    app.get('/', function (req, res) {
        home.index(req, res);
    });
    app.use('/users', actions);
}
exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map
