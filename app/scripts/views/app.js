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

        initialize: function (collection, filter) {
            this.collection = collection;
            this.filter = filter;

            this.headerView = new HeaderView({model: filter});
            this.sidebarView = new SideBar();

            var self = this;

            collection.on('loaded', function (newCollection) {
                console.log('Loaded, length: ' + newCollection.length);
                _.bind(self.list, self)();
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

            console.log('Render, length: ' + collection.length);

            if (filterAttrs.query) {
                collection = collection.filterByQuery(filterAttrs.query);
            }

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
