import express = require('express');

export function index(req: express.Request, res: express.Response) {
    var model = {
        title: 'Node.js Application',
        nodelink: '//nodejs.org',
        expresslink: '//github.com/visionmedia/express/wiki/New-features-in-4.x',
        connectlink: '//github.com/senchalabs/connect?source=c#middleware',
        vashlink: '//github.com/kirbysayshi/vash',
        lodashlink: '//lodash.com',
        socketiolink: '//socket.io',
        markedlink: '//github.com/chjj/marked',
        everyauthlink: '//github.com/bnoguchi/everyauth',
        foreverlink: '//github.com/nodejitsu/forever'
    };
    res.render('home/index', model);
}
