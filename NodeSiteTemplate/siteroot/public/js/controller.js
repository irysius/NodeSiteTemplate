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