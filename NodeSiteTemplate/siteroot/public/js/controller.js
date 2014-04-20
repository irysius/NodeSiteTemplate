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
                self.$response.html(JSON.stringify(data));
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
                self.$response.html(JSON.stringify(data));
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
                self.$response.html(JSON.stringify(data));
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
                self.$response.html(JSON.stringify(data));
            }
        })
    }
}