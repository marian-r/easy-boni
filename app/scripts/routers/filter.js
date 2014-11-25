'use strict';

define([
    'backbone',
    'jquery',
    'jquery-cookie'
], function (Backbone, $) {

    var cookie = $.cookie('order');
    var defaultOrder = cookie || 'name';

    return Backbone.Model.extend({

        defaults: {
            mode: null,
            order: defaultOrder,
            query: null,
            categories: [],
            features: []
        },

        initialize: function () {
            this.on('change:order', function (filter, order) {
                $.cookie('order', order, { expires: 365 });
            })
        }
    });
});
