'use strict';

define([
    'backbone'
], function (Backbone) {

    return Backbone.Router.extend({
        routes: {
            'map': 'map',
            'list': 'list',
            'detail(/:id)': 'detail',
            '*path': 'map'
        },

        initialize: function (appView) {
            this.appView = appView;
        },

        map: function () {
            this.appView.map();
        },

        list: function () {
            this.appView.list();
        },

        detail: function (id) {
            this.appView.detail(id);
        }
    });
});
