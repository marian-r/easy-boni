'use strict';

define([
    'backbone',
    'jquery'
], function (Backbone, $) {
    return Backbone.Model.extend({

        url: 'api/user/info',

        logout: function () {
            var self = this;
            $.get('api/user/logout', function () {
                self.clear();
            }, 'json')
        }
    });
});
