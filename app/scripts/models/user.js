'use strict';

define([
    'backbone',
    'jquery'
], function (Backbone, $) {
    return Backbone.Model.extend({

        url: '../backend/api/user/info',

        logout: function () {
            var self = this;
            $.get('../backend/api/user/logout', function () {
                self.clear();
            }, 'json')
        }
    });
});
