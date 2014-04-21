function index(req, res) {
    var model = {
        title: 'Node.js Application',
        nodelink: '//nodejs.org',
        expresslink: '//github.com/visionmedia/express/wiki/New-features-in-4.x',
        connectlink: '//github.com/senchalabs/connect?source=c#middleware',
        vashlink: '//github.com/kirbysayshi/vash',
        lodashlink: '//lodash.com',
        socketiolink: '//socket.io',
        markedlink: '//github.com/chjj/marked',
        basicauthlink: '//github.com/visionmedia/node-basic-auth',
        everyauthlink: '//github.com/bnoguchi/everyauth',
        foreverlink: '//github.com/nodejitsu/forever'
    };
    res.render('home/index', model);
}
exports.index = index;
