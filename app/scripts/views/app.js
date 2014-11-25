'use strict';

define([
    'backbone',
    'lodash',
    './header',
    './sidebar',
    './map',
    './list',
    './detail'
], function (Backbone, _, HeaderView, SideBar, MapView, ListView, DetailView) {

    return Backbone.View.extend({
        el: '#app',

        initialize: function (collection, filter, user) {
            this.collection = collection;
            this.filter = filter;
            this.user = user;

            this.headerView = new HeaderView(filter, user);
            this.sidebarView = new SideBar({model: filter});

            var self = this;

            collection.once('loaded', function () {
                var fnName = filter.get('mode');
                _.bind(self[fnName], self)();
            });
        },

        render: function () {
            this.headerView.render();
            this.sidebarView.render();

            return this;
        },

        map: function () {
            var mapView = new MapView();
            mapView.render();
            this.headerView.setActiveLink('link-map');
        },

        list: function () {
            var collection = this.collection;
            var filterAttrs = this.filter.attributes;

            collection = collection.performFilter(filterAttrs.query, filterAttrs.features);
            collection.comparator = filterAttrs.order;
            collection.sort();

            var listView = new ListView({collection: collection});
            listView.render();
            this.headerView.setActiveLink('link-list');
        },

        detail: function (id) {
            var detailView = new DetailView({model: this.collection.get(id)});
            detailView.render();
        }
    });
});
