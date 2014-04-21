var restCtrl = {
    $response: null,
    action: function (action) {
        var self = restCtrl;
        if (!self.$response) self.$response = $('input#response');
        self.$response.val('');
        $.ajax({
            url: '/rest',
            type: action,
            success: function (data, status, xhr) {
                self.$response.val(JSON.stringify(data));
            }
        })
    }
}

var paramCtrl = {
    $response: null,
    getUserFirstName: function (id) {
        var self = paramCtrl;
        if (!self.$response) self.$response = $('textarea#results');
        self.$response.html('');
        $.ajax({
            url: '/users/' + id + '/firstname',
            type: 'GET',
            success: function (data, status, xhr) {
                self.$response.html(JSON.stringify(data, null, 4));
            }
        })
    },
    getUser: function (id) {
        var self = paramCtrl;
        if (!self.$response) self.$response = $('textarea#results');
        self.$response.html('');
        $.ajax({
            url: '/users/' + id,
            type: 'GET',
            success: function (data, status, xhr) {
                self.$response.html(JSON.stringify(data, null, 4));
            }
        })
    },
    getUsers: function (filter) {
        var self = paramCtrl;
        if (!self.$response) self.$response = $('textarea#results');
        self.$response.html('');
        var url = '/users';
        if (filter) {
            url += '?gender=' + filter;
        }
        $.ajax({
            url: url,
            type: 'GET',
            success: function (data, status, xhr) {
                self.$response.html(JSON.stringify(data, null, 4));
            }
        })
    },
    updateUser: function (user) {
        var self = paramCtrl;
        if (!self.$response) self.$response = $('textarea#results');
        self.$response.html('');
        $.ajax({
            url: '/users',
            type: 'POST',
            data: user,
            success: function (data, status, xhr) {
                self.$response.html(JSON.stringify(data, null, 4));
            }
        })
    }
}

var markdownCtrl = {
    $response: null,
    parse: function (text) {
        console.log(text);
        var self = markdownCtrl;
        if (!self.$response) self.$response = $('#results');
        self.$response.html('');
        $.ajax({
            url: '/demos/markdown',
            type: 'POST',
            data: { raw: text },
            success: function (data, status, xhr) {
                console.log(data);
                self.$response.html(data.parsed);
            }
        })
    }
}

var socketsCtrl = {
    Chat: function (socket, $username, $message, $messages) {
        var connected = false;
        var _username = '';

        $message.on('keypress', function (event) {
            if (event.which == 13) {
                event.preventDefault();
                if ($message.val()) {
                    _sendMessage($message.val());
                    $message.val('');
                }
            }
        })

        socket.on('connect', function () {
            onConnected();
            var username = '';
            if (!_username) {
                username = promptUsername(0);
            }

            _setUsername(username);
        });
        socket.on('disconnect', function () {
            onDisconnected();
        })
        socket.on('msg receive', function (data) {
            console.log('rcv msg receive', data);
            $messages.prepend(data);
        })
        socket.on('user joined', function (data) {
            console.log('rcv user joined', data);
            $messages.prepend(data + ' joined chat.');
        })

        function onConnected() {
            console.log('connected');
            connected = true;
        }
        function onDisconnected() {
            console.log('disconnected');
            connected = false;
        }

        function promptUsername(fails) {
            var username = window.prompt('Enter your username.', '');
            if (fails > 5 || username === null) {
                username = 'random';
                alert('Generating random username: ' + username);
                return username;
            }
            if (username === '') {
                alert('Please provide a valid username.')
                username = promptUsername(fails + 1);
            }
            return username;
        }
        function _setUsername(username) {
            console.log('snd username', username);
            socket.emit('set username', username, function (data) {
                console.log('rcv username', data);
                _username = data;
                $username.val(_username);
            });
        }
        function _sendMessage(message) {
            console.log('snd msg', message);
            socket.emit('msg', message, function (data) {
                console.log('rcv msg', data);
                $messages.prepend(data);
            });
        }


        return {
            setUsername: function (username) {
                if (connected) {
                    _setUsername(username);
                } else {
                    alert('There is no socket connection to the server.');
                }
            },
            sendMessage: function () {
                if (_username === '') {
                    alert('You have not set a username yet.');
                } else {
                    if ($message.val()) {
                        _sendMessage($message.val());
                        $message.val('');
                    }
                }
            }
        }
    }
}